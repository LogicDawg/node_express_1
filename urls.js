const fs = require('fs');
const process = require('process');
const axios = require('axios');
let url = []


function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
      if (err) {
        console.error(`Error reading ${path}: ${err}`);
        process.exit(1);
      } else {
        url.push(data);
      }
    });
  }
  
  cat(process.argv[2]);



function handleOutput(text, out) {
    if (out) {
      fs.writeFile(out, text, 'utf8', function(err) {
        if (err) {
          console.error(`Couldn't write ${out}: ${err}`);
          process.exit(1);
        }
      });
    } else {
      console.log(text);
    }
  }

async function webURL(url) {
    try {
        let resp = await axios.get(url);
        handleOutput(resp.data, out); {
        if (err) {
          console.error(`Couldn't write ${out}: ${err}`);
          process.exit(1);
        }
      };
    } catch (err) {
      console.error(`Error fetching ${url}: ${err}`);
      process.exit(1);
    }
  }

  let path;
  let out;

  if (path.slice(0, 4) === 'http') {
    webURL(path, out);
  } else {
    cat(path, out);
  }