using System.Collections;

class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine(Solution.RomanToInt("III")); // expected 3 ✔️
        Console.WriteLine(Solution.RomanToInt("LVIII")); // expected 58 ✔️
        Console.WriteLine(Solution.RomanToInt("MCMXCIV")); // expected 1994 ✔️
    }
}


public class Solution {
    public static int RomanToInt(string s) {
        int result = 0;
        var prev = 0;
        for (int i = s.Length-1; i >= 0; i--)
        {
            var current = 0;
            switch (s[i]){
                case 'I': current = 1; break;
                case 'V': current = 5; break;
                case 'X': current = 10; break;
                case 'L': current = 50; break;
                case 'C': current = 100; break;
                case 'D': current = 500; break;
                case 'M': current = 1000; break;
            }

            if (current >= prev)
            {
                result += current;
            }else{
                result -= current;
            }
            prev = current;
        }

        return result;
    }
}