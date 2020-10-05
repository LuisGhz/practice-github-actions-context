import * as core from '@actions/core';
import * as github from '@actions/github';

function run() {
  core.info(`These are the context content:`);
  core.info(`${JSON.stringify(github.context, null, 4)}`);
}

run();
