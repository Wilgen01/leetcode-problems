using System.Collections;

class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine(Solution.LengthOfLastWord("Hello World")); // expected 5 ✔️
        Console.WriteLine(Solution.LengthOfLastWord("   fly me   to   the moon  ")); // expected 4 ✔️
        Console.WriteLine(Solution.LengthOfLastWord("luffy is still joyboy")); // expected 6 ✔️
    }
}

public class Solution {
    public static int LengthOfLastWord(string s) {
        var wordArr = s.Trim().Split(" ");
        return wordArr[wordArr.Length - 1].Length;
    }
}