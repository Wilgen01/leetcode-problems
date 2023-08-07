using System.Collections;

class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine(Solution.IsPalindrome(12321));// expected true ✔️
        Console.WriteLine(Solution.IsPalindrome(-121)); // expected false ✔️
        Console.WriteLine(Solution.IsPalindrome(10)); // expected false ✔️
        Console.WriteLine(Solution.IsPalindrome(12321)); // expected true ✔️
    }
}


class Solution
{
    public static bool IsPalindrome(int x)
    {
        var stringNumber = x.ToString();
        var StringReversed = stringNumber.ToCharArray();
        Array.Reverse(StringReversed);

        for (int i = 0; i < StringReversed.Length; i++)
        {
            if (StringReversed[i] != stringNumber[i])
            {
                return false;
            }
        }    

        return true;    
    }
}