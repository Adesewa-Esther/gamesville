function brosOverStack(n, m) {
//If n is even, Bet's best strategy will be to match Alp's moves- Bet will always win this way
if(n % 2 === 0) {
return 2;
}
//If n is odd, since a stack can be reduced to 1 in a single move, Alp can clear the first stack, putting him in a position where the remaining stacks are even and Bet has the next move- so all he has to do is match Bet's moves after clearing the first stack to win
else {
return 1;
}
}

console.log(`n=2, m=6: ${ brosOverStack(2,6) }
n=2, m=2: ${ brosOverStack(2,2) }
n=1, m=4: ${ brosOverStack(1,4) }
`);
