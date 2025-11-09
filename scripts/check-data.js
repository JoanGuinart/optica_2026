import fs from 'fs/promises';
import path from 'path';

const dataDir = path.join(process.cwd(), 'src', 'data');
const UPPER_RE = /\b([A-ZÀ-Ý]{2,})\b/gu; // match words with 2+ uppercase letters (basic)
const WHITELIST = new Set(['TV','UV','CIC','IIC','AMG','GPS','PDF','HTML','CSS','JS']);

async function listJsonFiles(dir){
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries.filter(e => e.isFile() && e.name.endsWith('.json')).map(e => path.join(dir, e.name));
}

function findUppercaseWords(str){
  const matches = [];
  let m;
  while((m = UPPER_RE.exec(str)) !== null){
    matches.push(m[1]);
  }
  return matches;
}

function formatPath(pathArr){
  return pathArr.length ? pathArr.map(p => typeof p === 'number' ? `[${p}]` : `.${p}`).join('').replace(/^\./, '') : '(root)';
}

async function main(){
  let files;
  try{ files = await listJsonFiles(dataDir); } catch(e){
    console.error('Could not read src/data directory:', e.message);
    process.exit(2);
  }

  const problems = [];

  for(const file of files){
    let raw;
    try{ raw = await fs.readFile(file, 'utf8'); } catch(e){
      console.error('Could not read file', file, e.message);
      continue;
    }

    let obj;
    try{ obj = JSON.parse(raw); } catch(e){
      console.error('Invalid JSON in', file, e.message);
      continue;
    }

    function walk(value, pathArr){
      if(typeof value === 'string'){
        const found = findUppercaseWords(value).filter(w => !WHITELIST.has(w));
        if(found.length){
          problems.push({ file, path: formatPath(pathArr), value, found });
        }
      } else if(Array.isArray(value)){
        value.forEach((v,i) => walk(v, pathArr.concat(i)));
      } else if(value && typeof value === 'object'){
        for(const [k,v] of Object.entries(value)) walk(v, pathArr.concat(k));
      }
    }

    walk(obj, []);
  }

  if(problems.length === 0){
    console.log('check-data: OK — no obvious ALL-CAPS tokens found in src/data JSON files.');
    process.exit(0);
  }

  console.log(`check-data: Found ${problems.length} potential ALL-CAPS occurrences:`);
  for(const p of problems){
    console.log('\nFile:', path.relative(process.cwd(), p.file));
    console.log('Path:', p.path);
    console.log('Matched words:', [...new Set(p.found)].join(', '));
    console.log('Value:', p.value.length > 140 ? p.value.slice(0, 140) + '…' : p.value);
  }

  console.log('\nRecommendation: review the listed values and normalize case where appropriate, or keep acronyms intentionally (e.g., `PDF`, `TV`).');
  process.exit(1);
}

main();
