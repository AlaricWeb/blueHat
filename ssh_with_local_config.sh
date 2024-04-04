#!/bin/bash
export BASH_CONFIG_REMOTE="~/.bashrc"

ssh -t root@106.53.192.140  "source $BASH_CONFIG_REMOTE; bash --login"


