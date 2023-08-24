using System.Diagnostics.Metrics;

Console.WriteLine(Solution.TitleToNumber("A")); // expected 1 ✔️
Console.WriteLine(Solution.TitleToNumber("AB")); // expected 28 ✔️
Console.WriteLine(Solution.TitleToNumber("ZY")); // expected 701 ✔️
Console.WriteLine(Solution.TitleToNumber("AA")); // expected 27 ✔️
Console.WriteLine(Solution.TitleToNumber("Z")); // expected 26 ✔️
Console.WriteLine(Solution.TitleToNumber("FXSHRXW")); // expected 2147483647 ✔️
Console.WriteLine(Solution.TitleToNumber("AAZ")); // expected 728 ✔️


public class Solution
{
    public static int TitleToNumber(string columnTitle)
    {
        if (columnTitle.Length == 1) return (int)columnTitle[0] - 64;
        var len = columnTitle.Length;
        var result = 0;
        for (int i = 0; i <= len - 1; i++)
        {
            if (i == len - 1) result += (int)columnTitle[i] - 64;
            else result += ((int)columnTitle[i] - 64) * (int)(Math.Pow(26, len - i - 1));
        }
        return result;
    }
}