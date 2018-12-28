# Happy Pancake Flipping

A fun little pancake flipping code kata intended for use with Node.

## The Problem

The Infinite House of Pancakes has just introduced a new kind of pancake! It has a happy face made of chocolate chips on one side (the "happy side"), and nothing on the other side (the "blank side").

You are the head waiter on duty, and the kitchen has just given you a stack of pancakes to serve to a customer. Like any good pancake server, you have X-ray pancake vision, and you can see whether each pancake in the stack has the happy side up or the blank side up. You think the customer will be happiest if every pancake is happy side up when you serve them.

You know the following maneuver: carefully lift up some number of pancakes (possibly all of them) from the top of the stack, flip that entire group over, and then put the group back down on top of any pancakes that you did not lift up.

What is the smallest number of times you will need to execute the maneuver to get all the pancakes happy side up, if you make optimal choices?

## How This Works

- Install dependencies with `npm install`
- Run the Mocha tests using `npm test`
- Run the app with `node pancakes test.txt`
- Feel free to modify the test file `test.txt` or supply your own