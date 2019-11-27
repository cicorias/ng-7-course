"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
// Stateless machine definition
// machine.transition(...) is a pure function used by the interpreter.
const toggleMachine = xstate_1.Machine({
    id: 'toggle',
    initial: 'inactive',
    states: {
        inactive: { on: { TOGGLE: 'active' } },
        active: { on: { TOGGLE: 'inactive' } }
    }
});
// Machine instance with internal state
const toggleService = xstate_1.interpret(toggleMachine)
    .onTransition(state => console.log(state.value))
    .start();
// => 'inactive'
toggleService.send('TOGGLE');
// => 'active'
toggleService.send('TOGGLE');
// => 'inactive'
