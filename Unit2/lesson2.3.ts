import {  } from 'xstate'

type foo = {
    foobar(): void
    state: {}
}

const bar: foo = {
    foobar: ()=> {console.log('here');},
    state: {}
}


bar.foobar();


console.log('foobar')