/*
JavaScript Execution Flow - Anonymous Function Callback

- Visual Step-by-Step Guide 


 [ Source Code ] */ 

function executeOperation(operation) {
  operation();
}

executeOperation(function () {
  console.log("Operation Executed Successfully");
}); 
/*

## Detailed Component Breakdown ##

1. Memory Reference Diagram

┌─────────────────────────────────────────────────────────────┐
│                    GLOBAL EXECUTION CONTEXT                            │
├─────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────┐        ┌──────────────────────────┐     │
│  │ executeOperation    │───────►│ FUNCTION OBJECT             │      │
│  └──────────────────┘        │ - Parameters: operation.     │      │
│                                  │ - Body: operation();         │      │
│                                  └──────────────────────────┘     │
│                                                                        │
└─────────────────────────────────────────────────────────────┘
                                      │
                                      │ Call with argument
                                      ▼
┌─────────────────────────────────────────────────────────────┐
│               executeOperation EXECUTION CONTEXT                        │
├─────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────┐        ┌──────────────────────────┐     │
│  │ operation           │───────►│ ANONYMOUS FUNCTION           │     │
│  └──────────────────┘   REF  │ - No name                     │      │
│                                  │ - Body: console.log()         │     │
│                                  └──────────────────────────┘     │
│                                                                        │
└─────────────────────────────────────────────────────────────┘

function executeOperation(operation) {
  operation();                ^  │
}                            1│  │
                              │  │2
                              │  V
 //      executeOperation(function () { console.log("Operation Executed Successfully");  }); 
 
 // 1. The `anonymousfunction` is sent to the `operation`
 // then --> [operation = anonymousfunction]
 // 2. operation() = anonymousfunction = console.log("Operation Executed Successfully")






2. Call Stack Animation


TIME 0: EMPTY STACK
┌─────────────┐
│                │
│                │
│                │
│                │
└─────────────┘

TIME 1: executeOperation CALLED
┌─────────────┐
│                │
│                │
│                │
│ executeOp()    │ ← PUSHED
└─────────────┘

TIME 2: operation() CALLED
┌─────────────┐
│                │
│                │
│ anonymous()    │ ← PUSHED
│ executeOp()    │
└─────────────┘

TIME 3: anonymous() EXECUTING
┌─────────────┐
│                │
│ EXECUTING      │ ← console.log()
│ anonymous()    │
│ executeOp()    │
└─────────────┘

TIME 4: anonymous() RETURNS
┌─────────────┐
│                │
│                │
│                │ ← POPPED
│ executeOp()    │
└─────────────┘

TIME 5: executeOperation RETURNS
┌─────────────┐
│                │
│                │
│                │
│                │ ← POPPED
└─────────────┘


3. Data Flow Visualization


SOURCE CODE
    ↓
PARSER (Reads and understands code)
    ↓
┌─────────────────────────────────────────────────┐
│             MEMORY ALLOCATION                            │
├─────────────────────────────────────────────────┤
│                                                          │
│  GLOBAL:                                                 │
│  ┌─────────────┐  stores reference to  ┌─────┐       │
│  │executeOp var  ├──────────────────►│Func1  │       │
│  └─────────────┘                       └─────┘       │
│                                                          │
└─────────────────────────────────────────────────┘
    ↓
EXECUTION STARTS
    ↓
┌─────────────────────────────────────────────────┐
│            FUNCTION INVOCATION                           │
├─────────────────────────────────────────────────┤
│  1. Create argument:                                     │
│     ┌─────────────┐                                   │
│     │Anonymous Func├──created in heap─────────┐       │
│     └─────────────┘                           │       │
│                                                  │       │
│  2. Call executeOperation:                       │       │
│     ┌─────────────────┐                      │       │
│     │operation param     ├─receives REFERENCE──┘        │
│     └─────────────────┘                              │
│                                                          │
│  3. operation() inside executeOperation:                 │
│     Follows reference to heap → Executes code           │
└─────────────────────────────────────────────────┘
    ↓
OUTPUT TO CONSOLE


4. Step-by-Step Sequence Diagram

┌─────────────┐    ┌──────────────────┐    ┌─────────────┐    ┌─────────┐
│   Main         │    │   executeOp         │    │  Anonymous     │    │ Console   │
│  Program       │    │   Function          │    │  Function      │    │           │
└──────┬──────┘    └─────────┬────────┘    └──────┬──────┘    └────┬────┘
       │                      │                    │                │
       │ 1. Call with        │                     │                │
       │────anonymous func──►│                   │                │
       │                     │                     │                │
       │                     │ 2. Store reference  │                │
       │                     │───────to heap──────►│             │
       │                     │                     │                │
       │                     │ 3. Call operation() │                │
       │                     │────────────────────►│            │
       │                     │                     │                │
       │                     │                     │ 4. Execute body│
       │                     │                     │─────log()─────►│
       │                     │                     │                │
       │                     │                     │                │ 5. Display
       │                     │                     │                │───output─►
       │                     │ 6. Return           │                │
       │                     │◄────────────────────│            │
       │ 7. Return           │                     │                │
       │◄────────────────────│                 │                │


5. Key Concepts Illustrated

A. Reference vs Value


VARIABLE: operation
   │
   └───► [HEAP MEMORY ADDRESS: 0x1234]
             │
             ▼
         ┌─────────────────────┐
         │ ANONYMOUS FUNCTION      │
         │ - Code to execute       │
         │ - console.log()         │
         └─────────────────────┘


B. Execution Contexts


┌─────────────────────────────────────────┐
│        GLOBAL EXECUTION CONTEXT                 │
│  • Has: executeOperation function               │
│  • Can call: executeOperation()                 │
└─────────────────┬───────────────────────┘
                  │
                  │ Creates new context when called
                  ▼
┌─────────────────────────────────────────┐
│    EXECUTEOPERATION EXECUTION CONTEXT           │
│  • Has: operation parameter                     │
│  • Can call: operation()                        │
│  • Has access to: anonymous function            │
└─────────────────┬───────────────────────┘
                  │
                  │ Creates new context when called
                  ▼
┌─────────────────────────────────────────┐
│   ANONYMOUS FUNCTION EXECUTION CONTEXT          │
│  • Has: no parameters                           │
│  • Executes: console.log()                      │
│  • Returns: undefined                           │
└─────────────────────────────────────────┘


6. Memory Timeline


TIME  T0 (Parse)     T1 (Call)          T2 (Execute)        T3 (Cleanup)
      ┌──────┐       ┌──────┐           ┌──────┐           ┌──────┐
      │Global │       │ Global │           │ Global│           │ Global │
      │  +    │       │    +   │           │   +   │           │   +    │
      │execute│       │execute │           │execute│           │execute │
      └──────┘       ├──────┤           ├──────┤           └──────┘
                       │ExecOp │           │ExecOp │
                       │Context│           │Context│
                       │   +   │           │   +   │
                       │ param │           │ param │
                       └──────┘          ├──────┤
                                           │  Anon │
                                           │Context│
                                           └──────┘



Learning Points for Beginners:

1. Functions are Objects - Functions in JavaScript can be stored in variables and passed around
2. Call Stack - Tracks which function is currently running (LIFO - Last In, First Out)
3. Reference Passing - When passing functions, we pass a reference (address), not a copy
4. Execution Context - Each function call creates its own temporary workspace
5. Anonymous Functions - Functions without names, created on-the-fly
6. Callback Pattern - Passing a function to be "called back" later

This visualization shows how JavaScript manages memory, execution order, and function references when working with callbacks!
*/
