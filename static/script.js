
const logs = [];

function printLogs(){
    document.getElementById("log").innerHTML="";
    for(i=0;i<logs.length;i++){
        logs.push(logs[i];
        document.getElementById("log").innerHTML="<br>";
    }
}

function button1(){
    document.getElementById("result").innerHTML="input1 is "+document.getElementById("inp1").value+"<br>";
    document.getElementById("result").innerHTML="input2 is "+document.getElementById("inp2").value;
    document.getElementById("result").innerHTML+="<br>";
    console.log("pressed");
    document.getElementById("result").innerHTML+="And the zigzag is ";
    document.getElementById("result").innerHTML+=convert(document.getElementById("inp1").value,document.getElementById("inp2").value);
    
}

var longestPalindrome = function(s) {
    var maxPalindromeLength = 0;
    var maxPalindrome = "";
    for (i=0;i<s.length;i++){
        let pallindromeBroken = false;
        // Test if i is the index of the middle of a palindrome (of odd length)
        for (j=0;j+i<s.length && !pallindromeBroken && j<=i;j++){
            logs.push("i is "+i+"<br>");
            logs.push("j is "+j+"<br>");
            logs.push("now testing odds <br>");
            
            console.log();
            if (s[i-j]==s[i+j]){
                if (maxPalindromeLength<1+(2*j))
                {
                   
                    
                    maxPalindromeLength = 1+(2*j);
                    maxPalindrome = s.slice(i-j,i+j+1);
                    ;
                    logs.push("new max pal "+maxPalindrome+"<br>");
                    ;
                };
            } else {
                pallindromeBroken = true;
            }
        }
        pallindromeBroken = false;
        // Test if i is the index of the left middle of a palindrome (of even length)
        for (j=1;j+i<s.length && !pallindromeBroken && j<=i;j++){
            logs.push("i is "+i+"<br>");
            logs.push("j is "+j+"<br>");
            logs.push("now testing evens <br>");
            
            if (s[i-j+1]==s[i+j]){
                if (maxPalindromeLength<(2*j))
                {
                    maxPalindromeLength = (2*j);
                    maxPalindrome = s.slice(i-j+1,i+j+1);
                    ;
                    logs.push("new max pal "+maxPalindrome+"<br>");
                    ;
                };
            } else {
                pallindromeBroken = true;
            }
        };


    }
    logs.push("max pall is "+maxPalindrome)
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
    logs.push(" numRows is "+numRows);
    var maxNumberOfCharactersInBlocks = numRows+(numRows-2);
    logs.push(" maxNumberOfCharactersInBlocks is "+maxNumberOfCharactersInBlocks);
    
    var numberOfCompleteBlocks = Math.floor(s.length / maxNumberOfCharactersInBlocks);
    logs.push(" numberOfCompleteBlocks is "+numberOfCompleteBlocks);
    
    var columnsPerBlock = numRows-1
    logs.push(" columnsPerBlock is "+columnsPerBlock);
    
    const columns = [];
    for (i=0;i<(numberOfCompleteBlocks+1)*columnsPerBlock;i++){
        var emptyColumn = [];
        for (j=0;j<numRows;j++){
            emptyColumn.push(null);
        }
        columns.push(emptyColumn);
    }
    logs.push(columns);


    // Returns a tuple that represents the coordinates of a index in the string
    var assignCharacter = function(i){
        var blockIndex = Math.floor(i/maxNumberOfCharactersInBlocks);
        logs.push(" blockIndex is "+blockIndex+"<br>");
        console.log();
        var distanceFromStartOfBlock = i%maxNumberOfCharactersInBlocks;
        logs.push(" distanceFromStartOfBlock is "+distanceFromStartOfBlock+"<br>");
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
        logs.push(" i is "+i+" coords are "+coords);
        logs.push("");
        columns[coords[1]][coords[0]] = s[i];
    }
    logs.push(columns);


    var result = "";
    // i represents row, j represents column. Scans through matrix to generate result
    for (i=0;i<numRows;i++){
        for (j=0;j<columns.length;j++){
            if (columns[j][i]!=undefined){
                result+=columns[j][i];
            }
        }
    }
    printLogs();
    return result;






};
