

function button1(){
    document.getElementById("result").innerHTML="input is "+document.getElementById("inp1").value;
    document.getElementById("result").innerHTML+="<br>";
    console.log("pressed");
    document.getElementById("result").innerHTML+="And the zigzag is ";
    document.getElementById("result").innerHTML+=convert(document.getElementById("inp1").value);
    
}

var longestPalindrome = function(s) {
    var maxPalindromeLength = 0;
    var maxPalindrome = "";
    for (i=0;i<s.length;i++){
        let pallindromeBroken = false;
        // Test if i is the index of the middle of a palindrome (of odd length)
        for (j=0;j+i<s.length && !pallindromeBroken && j<=i;j++){
            document.getElementById("log").innerHTML+="i is "+i+"<br>"
            document.getElementById("log").innerHTML+="j is "+j+"<br>"
            document.getElementById("log").innerHTML+="now testing odds <br>"
            
            console.log();
            if (s[i-j]==s[i+j]){
                if (maxPalindromeLength<1+(2*j))
                {
                   
                    
                    maxPalindromeLength = 1+(2*j);
                    maxPalindrome = s.slice(i-j,i+j+1);
                    document.getElementById("log").innerHTML+="<br>";
                    document.getElementById("log").innerHTML+="new max pal "+maxPalindrome+"<br>";
                    document.getElementById("log").innerHTML+="<br>";
                };
            } else {
                pallindromeBroken = true;
            }
        }
        pallindromeBroken = false;
        // Test if i is the index of the left middle of a palindrome (of even length)
        for (j=1;j+i<s.length && !pallindromeBroken && j<=i;j++){
            document.getElementById("log").innerHTML+="i is "+i+"<br>"
            document.getElementById("log").innerHTML+="j is "+j+"<br>"
            document.getElementById("log").innerHTML+="now testing evens <br>"
            
            if (s[i-j+1]==s[i+j]){
                if (maxPalindromeLength<(2*j))
                {
                    maxPalindromeLength = (2*j);
                    maxPalindrome = s.slice(i-j+1,i+j+1);
                    document.getElementById("log").innerHTML+="<br>";
                    document.getElementById("log").innerHTML+="new max pal "+maxPalindrome+"<br>";
                    document.getElementById("log").innerHTML+="<br>";
                };
            } else {
                pallindromeBroken = true;
            }
        };


    }
    console.log("max pall is "+maxPalindrome)
    return maxPalindrome;
};



/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {


    if(s.length<numRows || numRows==1){
        return s
    }


    // A block is one zig and one zag, the string down and the letters back up again
    document.getElementById("log").innerHTML+=" numRows is "+numRows;
    var maxNumberOfCharactersInBlocks = numRows+(numRows-2);
    document.getElementById("log").innerHTML+=" maxNumberOfCharactersInBlocks is "+maxNumberOfCharactersInBlocks;
    document.getElementById("log").innerHTML+="<br>"
    var numberOfCompleteBlocks = Math.floor(s.length / maxNumberOfCharactersInBlocks);
    document.getElementById("log").innerHTML+=" numberOfCompleteBlocks is "+numberOfCompleteBlocks;
    document.getElementById("log").innerHTML+="<br>"
    var columnsPerBlock = numRows-1
    document.getElementById("log").innerHTML+=" columnsPerBlock is "+columnsPerBlock;
    document.getElementById("log").innerHTML+="<br>"
    const columns = [];
    for (i=0;i<(numberOfCompleteBlocks+1)*columnsPerBlock;i++){
        var emptyColumn = [];
        for (j=0;j<numRows;j++){
            emptyColumn.push(null);
        }
        columns.push(emptyColumn);
    }
    document.getElementById("log").innerHTML+=columns;


    // Returns a tuple that represents the coordinates of a index in the string
    var assignCharacter = function(i){
        var blockIndex = Math.floor(i/maxNumberOfCharactersInBlocks);
        document.getElementById("log").innerHTML+=" blockIndex is "+blockIndex+"<br>";
        console.log();
        var distanceFromStartOfBlock = i%maxNumberOfCharactersInBlocks;
        document.getElementById("log").innerHTML+=" distanceFromStartOfBlock is "+distanceFromStartOfBlock+"<br>";
        var row = null;
        if (distanceFromStartOfBlock<numRows){
            var row = distanceFromStartOfBlock;
        } else {
            var distanceFromBottomOfZig = distanceFromStartOfBlock - numRows;
            var row = numRows - distanceFromBottomOfZig - 2;
        }
        var column = blockIndex*columnsPerBlock
        if (distanceFromStartOfBlock>=numRows){
            column= column +(distanceFromStartOfBlock-numRows)+1;
        }
        return ([row,column]);
    }


    for (i=0;i<s.length;i++){
        var coords = assignCharacter(i);
        console.log(" i is "+i+" coords are "+coords);
        console.log();
        columns[coords[1]][coords[0]] = s[i];
    }
    console.log(columns);


    var result = "";
    // i represents row, j represents column. Scans through matrix to generate result
    for (i=0;i<numRows;i++){
        for (j=0;j<columns.length;j++){
            if (columns[j][i]!=undefined){
                result+=columns[j][i];
            }
        }
    }
    return result;






};

