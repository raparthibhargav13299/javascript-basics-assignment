/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (num) =>
{
     // Write your code here
     var n = num
     var row = '';
     for (var i = 1; i <= n; i++)
     {
          for (var k = 1; (k <= n - i); k++)
          {
               row += ' ';
          }
          for (var j = 1; j <= i; j++)
          {
               row += ' *';
          }
          row += "  \n";
     }
     return row;

};


/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
