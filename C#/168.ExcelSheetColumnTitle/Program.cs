
using System.Text;

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine(Solution.ConvertToTitle(1)); // expected A ✔️
        Console.WriteLine(Solution.ConvertToTitle(28)); // expected AB ✔️
        Console.WriteLine(Solution.ConvertToTitle(701)); // expected ZY ✔️
        Console.WriteLine(Solution.ConvertToTitle(27)); // expected AA ✔️
        Console.WriteLine(Solution.ConvertToTitle(26)); // expected Z ✔️



    }
}


public class Solution
{
    public static string ConvertToTitle(int columnNumber)
    {
        {
            string result = string.Empty;

            while(columnNumber > 0)
            {
                var left = columnNumber % 26;
                left = left == 0 ? 26: left;
                result = (char)(64 + left) + result;
                columnNumber = (columnNumber - left ) / 26;
            }

            return result;
        }
    }
}