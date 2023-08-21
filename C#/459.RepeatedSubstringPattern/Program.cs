
using System.Text;

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine(Solution.RepeatedSubstringPattern("abab")); // expected True ✔️
        Console.WriteLine(Solution.RepeatedSubstringPattern("aba")); // expected False ✔️
        Console.WriteLine(Solution.RepeatedSubstringPattern("abcabcabcabc")); // expected True ✔️
        Console.WriteLine(Solution.RepeatedSubstringPattern("ababab")); // expected True ✔️
        Console.WriteLine(Solution.RepeatedSubstringPattern("zzz")); // expected True ✔️



    }
}


public class Solution
{
    public static bool RepeatedSubstringPattern(string s)
    {
        var length = s.Length;

        for(int i = 1; i <= length / 2; i++)
        {
            if (length % i == 0)
            {
                var sub = s.Substring(0, i);
                StringBuilder sb = new StringBuilder();

                while (sb.Length < length)
                {
                    sb.Append(sub);
                }
                if (sb.ToString() == s) return true;
            }
        }

        return false;
    }
}