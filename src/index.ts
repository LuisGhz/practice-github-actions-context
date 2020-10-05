import * as core from '@actions/core';
import * as github from '@actions/github';

function run() {
  core.info(`These are the context content:`);
  core.info(`${github.context}`);
}

run();
