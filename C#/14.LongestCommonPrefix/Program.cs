using System.Collections;

class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine(Solution.LongestCommonPrefix(new string[] {"flower","flow","flight"})); // expected "fl" ✔️
        Console.WriteLine(Solution.LongestCommonPrefix(new string[] {"dog","racecar","car"})); // expected "" ✔️
        Console.WriteLine(Solution.LongestCommonPrefix(new string[] {"flower","flower", "flo"})); // expected "" ✔️
    }
}

public class Solution {
    public static string LongestCommonPrefix(string[] strs) {
        for (int i = 0; i < strs[0].Length; i++) {
            var letter = strs[0][i];
            for (int j = 0; j < strs.Length; j++)
            {
                var element = strs[j];
                if (element.Length <= i || element[i] != letter)
                {
                    return strs[0].Substring(0, i);
                }
            }
        }
        return strs[0];
    }
}