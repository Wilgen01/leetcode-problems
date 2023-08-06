using System.Collections;

class Program
{
    public static void Main(string[] args)
    {
        var result = Solution.TwoSum(new int[]{2, 7, 11, 15}, 9);
        foreach (int numero in result)
        {
            Console.Write(numero + " "); // expected [0,1]✔️
        }

        Console.WriteLine("");
        result = Solution.TwoSum(new int[]{3, 2, 4}, 6);
        foreach (int numero in result)
        {
            Console.Write(numero + " "); // expected [1,2]✔️
        }

        Console.WriteLine("");
        result = Solution.TwoSum(new int[]{3, 3}, 6);
        foreach (int numero in result)
        {
            Console.Write(numero + " "); // expected [0,1]✔️
        }
    }
}   


class Solution
{
    public static int[] TwoSum(int[] nums, int target)
    {
        Dictionary<int, int> map = new Dictionary<int, int>();
        
        for(int i=0; i<nums.Length; i++){
            int complement = target - nums[i];
            if(map.ContainsKey(complement)){
                return new int[] {map[complement], i};
            }
            
            map[nums[i]] = i;
        }
        return Array.Empty<int>();
    }
}
