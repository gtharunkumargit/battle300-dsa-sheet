// Problem data structure
const problemsData = [
    {
        topic: "Arrays",
        problems: [
            { name: "Move Zeroes", difficulty: "Easy", link: "https://leetcode.com/problems/move-zeroes/" },
            { name: "Majority Element", difficulty: "Easy", link: "https://leetcode.com/problems/majority-element/" },
            { name: "Remove Duplicates from Sorted Array", difficulty: "Easy", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
            { name: "Best Time to Buy and Sell Stock", difficulty: "Easy", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
            { name: "Rotate Array", difficulty: "Medium", link: "https://leetcode.com/problems/rotate-array/" },
            { name: "Product of Array Except Self", difficulty: "Medium", link: "https://leetcode.com/problems/product-of-array-except-self/" },
            { name: "Best Time to Buy and Sell Stock II", difficulty: "Medium", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/" },
            { name: "Number of Zero-Filled Subarrays", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-zero-filled-subarrays/" },
            { name: "Increasing Triplet Subsequence", difficulty: "Medium", link: "https://leetcode.com/problems/increasing-triplet-subsequence/" },
            { name: "First Missing Positive", difficulty: "Hard", link: "https://leetcode.com/problems/first-missing-positive/" }
        ]
    },
    {
        topic: "Strings",
        problems: [
            { name: "Is Subsequence", difficulty: "Easy", link: "https://leetcode.com/problems/is-subsequence/" },
            { name: "Valid Palindrome", difficulty: "Easy", link: "https://leetcode.com/problems/valid-palindrome/" },
            { name: "Longest Common Prefix", difficulty: "Easy", link: "https://leetcode.com/problems/longest-common-prefix/" },
            { name: "Zigzag Conversion", difficulty: "Medium", link: "https://leetcode.com/problems/zigzag-conversion/" },
            { name: "Reverse Words in a String", difficulty: "Medium", link: "https://leetcode.com/problems/reverse-words-in-a-string/" },
            { name: "Guess the Word", difficulty: "Hard", link: "https://leetcode.com/problems/guess-the-word/" }
        ]
    },
    {
        topic: "Bit Manipulation",
        problems: [
            { name: "Single Number", difficulty: "Easy", link: "https://leetcode.com/problems/single-number/" },
            { name: "Number of 1 Bits", difficulty: "Easy", link: "https://leetcode.com/problems/number-of-1-bits/" },
            { name: "Counting Bits", difficulty: "Easy", link: "https://leetcode.com/problems/counting-bits/" },
            { name: "Reverse Bits", difficulty: "Easy", link: "https://leetcode.com/problems/reverse-bits/" },
            { name: "Bitwise AND of Numbers Range", difficulty: "Medium", link: "https://leetcode.com/problems/bitwise-and-of-numbers-range/" },
            { name: "Single Number III", difficulty: "Medium", link: "https://leetcode.com/problems/single-number-iii/" },
            { name: "Sum of Two Integers", difficulty: "Medium", link: "https://leetcode.com/problems/sum-of-two-integers/" }
        ]
    },
    {
        "topic": "Hash Tables",
        "problems": [
            { "name": "Design HashMap", "difficulty": "Easy", "link": "https://leetcode.com/problems/design-hashmap/" },
            { "name": "Maximum Number of Balloons", "difficulty": "Easy", "link": "https://leetcode.com/problems/maximum-number-of-balloons/" },
            { "name": "Number of Good Pairs", "difficulty": "Easy", "link": "https://leetcode.com/problems/number-of-good-pairs/" },
            { "name": "Isomorphic Strings", "difficulty": "Easy", "link": "https://leetcode.com/problems/isomorphic-strings/" },
            { "name": "Ransom Note", "difficulty": "Easy", "link": "https://leetcode.com/problems/ransom-note/" },
            { "name": "Contains Duplicate II", "difficulty": "Easy", "link": "https://leetcode.com/problems/contains-duplicate-ii/" },
            { "name": "Group Anagrams", "difficulty": "Medium", "link": "https://leetcode.com/problems/group-anagrams/" },
            { "name": "Encode and Decode TinyURL", "difficulty": "Medium", "link": "https://leetcode.com/problems/encode-and-decode-tinyurl/" },
            { "name": "Reorganize String", "difficulty": "Medium", "link": "https://leetcode.com/problems/reorganize-string/" },
            { "name": "Longest Consecutive Sequence", "difficulty": "Medium", "link": "https://leetcode.com/problems/longest-consecutive-sequence/" },
            { "name": "Split Array into Consecutive Subsequences", "difficulty": "Medium", "link": "https://leetcode.com/problems/split-array-into-consecutive-subsequences/" },
            { "name": "Number of Matching Subsequences", "difficulty": "Medium", "link": "https://leetcode.com/problems/number-of-matching-subsequences/" },
            { "name": "Number of Good Ways to Split a String", "difficulty": "Medium", "link": "https://leetcode.com/problems/number-of-good-ways-to-split-a-string/" }
        ]
    },
    {
        "topic": "Two Pointers",
        "problems": [
            { "name": "Merge Sorted Array", "difficulty": "Easy", "link": "https://leetcode.com/problems/merge-sorted-array/" },
            { "name": "Two Sum II - Input Array Is Sorted", "difficulty": "Medium", "link": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
            { "name": "Container With Most Water", "difficulty": "Medium", "link": "https://leetcode.com/problems/container-with-most-water/" },
            { "name": "3Sum", "difficulty": "Medium", "link": "https://leetcode.com/problems/3sum/" },
            { "name": "Trapping Rain Water", "difficulty": "Hard", "link": "https://leetcode.com/problems/trapping-rain-water/" }
        ]
    },
    {
        "topic": "Prefix Sum",
        "problems": [
            { "name": "Range Sum Query - Immutable", "difficulty": "Easy", "link": "https://leetcode.com/problems/range-sum-query-immutable/" },
            { "name": "Subarray Sum Equals K", "difficulty": "Medium", "link": "https://leetcode.com/problems/subarray-sum-equals-k/" },
            { "name": "Subarray Sums Divisible by K", "difficulty": "Medium", "link": "https://leetcode.com/problems/subarray-sums-divisible-by-k/" },
            { "name": "Continuous Subarray Sum", "difficulty": "Medium", "link": "https://leetcode.com/problems/continuous-subarray-sum/" },
            { "name": "Contiguous Array", "difficulty": "Medium", "link": "https://leetcode.com/problems/contiguous-array/" }
        ]
    },
    {
        "topic": "Sliding Window - Fixed Size",
        "problems": [
            { "name": "Maximum Average Subarray I", "difficulty": "Easy", "link": "https://leetcode.com/problems/maximum-average-subarray-i/" },
            { "name": "Find All Anagrams in a String", "difficulty": "Medium", "link": "https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
            { "name": "Permutation in String", "difficulty": "Medium", "link": "https://leetcode.com/problems/permutation-in-string/" },
            { "name": "Maximum Sum of Distinct Subarrays With Length K", "difficulty": "Medium", "link": "https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/" },
            { "name": "Substring with Concatenation of All Words", "difficulty": "Hard", "link": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/" }
        ]
    },
    {
        "topic": "Kadane's Algorithm",
        "problems": [
            { "name": "Maximum Subarray", "difficulty": "Medium", "link": "https://leetcode.com/problems/maximum-subarray/" },
            { "name": "Maximum Sum Circular Subarray", "difficulty": "Medium", "link": "https://leetcode.com/problems/maximum-sum-circular-subarray/" },
            { "name": "Maximum Product Subarray", "difficulty": "Medium", "link": "https://leetcode.com/problems/maximum-product-subarray/" },
            { "name": "Best Sightseeing Pair", "difficulty": "Medium", "link": "https://leetcode.com/problems/best-sightseeing-pair/" }
        ]
    },
    {
        "topic": "Matrix (2D Array)",
        "problems": [
            { "name": "Spiral Matrix", "difficulty": "Medium", "link": "https://leetcode.com/problems/spiral-matrix/" },
            { "name": "Rotate Image", "difficulty": "Medium", "link": "https://leetcode.com/problems/rotate-image/" },
            { "name": "Set Matrix Zeroes", "difficulty": "Medium", "link": "https://leetcode.com/problems/set-matrix-zeroes/" },
            { "name": "Valid Sudoku", "difficulty": "Medium", "link": "https://leetcode.com/problems/valid-sudoku/" },
            { "name": "Game of Life", "difficulty": "Medium", "link": "https://leetcode.com/problems/game-of-life/" }
        ]
    },
    {
        "topic": "Linked List",
        "problems": [
            { "name": "Intersection of Two Linked Lists", "difficulty": "Easy", "link": "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
            { "name": "Design Linked List", "difficulty": "Medium", "link": "https://leetcode.com/problems/design-linked-list/" },
            { "name": "Remove Nth Node From End of List", "difficulty": "Medium", "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
            { "name": "Remove Duplicates from Sorted List II", "difficulty": "Medium", "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/" },
            { "name": "Swap Nodes in Pairs", "difficulty": "Medium", "link": "https://leetcode.com/problems/swap-nodes-in-pairs/" },
            { "name": "Copy List with Random Pointer", "difficulty": "Medium", "link": "https://leetcode.com/problems/copy-list-with-random-pointer/" },
            { "name": "Partition List", "difficulty": "Medium", "link": "https://leetcode.com/problems/partition-list/" },
            { "name": "Rotate List", "difficulty": "Medium", "link": "https://leetcode.com/problems/rotate-list/" },
            { "name": "Add Two Numbers", "difficulty": "Medium", "link": "https://leetcode.com/problems/add-two-numbers/" },
            { "name": "Flatten a Multilevel Doubly Linked List", "difficulty": "Medium", "link": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/" }
        ]
    },
    {
        "topic": "LinkedList In-place Reversal",
        "problems": [
            { "name": "Palindrome Linked List", "difficulty": "Easy", "link": "https://leetcode.com/problems/palindrome-linked-list/" },
            { "name": "Reverse Linked List", "difficulty": "Easy", "link": "https://leetcode.com/problems/reverse-linked-list/" },
            { "name": "Reverse Linked List II", "difficulty": "Medium", "link": "https://leetcode.com/problems/reverse-linked-list-ii/" },
            { "name": "Reverse Nodes in k-Group", "difficulty": "Hard", "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/" }
        ]
    },
    {
        "topic": "Fast and Slow Pointers",
        "problems": [
            { "name": "Linked List Cycle", "difficulty": "Easy", "link": "https://leetcode.com/problems/linked-list-cycle/" },
            { "name": "Middle of the Linked List", "difficulty": "Easy", "link": "https://leetcode.com/problems/middle-of-the-linked-list/" },
            { "name": "Happy Number", "difficulty": "Easy", "link": "https://leetcode.com/problems/happy-number/" },
            { "name": "Linked List Cycle II", "difficulty": "Medium", "link": "https://leetcode.com/problems/linked-list-cycle-ii/" }
        ]
    },
    {
        "topic": "Stacks",
        "problems": [
            { "name": "Valid Parentheses", "difficulty": "Easy", "link": "https://leetcode.com/problems/valid-parentheses/" },
            { "name": "Remove All Adjacent Duplicates In String", "difficulty": "Easy", "link": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/" },
            { "name": "Min Stack", "difficulty": "Medium", "link": "https://leetcode.com/problems/min-stack/" },
            { "name": "Remove Duplicate Letters", "difficulty": "Medium", "link": "https://leetcode.com/problems/remove-duplicate-letters/" },
            { "name": "Removing Stars From a String", "difficulty": "Medium", "link": "https://leetcode.com/problems/removing-stars-from-a-string/" },
            { "name": "Evaluate Reverse Polish Notation", "difficulty": "Medium", "link": "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
            { "name": "Basic Calculator II", "difficulty": "Medium", "link": "https://leetcode.com/problems/basic-calculator-ii/" },
            { "name": "Longest Valid Parentheses", "difficulty": "Hard", "link": "https://leetcode.com/problems/longest-valid-parentheses/" }
        ]
    },
    {
        "topic": "Monotonic Stack",
        "problems": [
            { "name": "Next Greater Element I", "difficulty": "Easy", "link": "https://leetcode.com/problems/next-greater-element-i/" },
            { "name": "Daily Temperatures", "difficulty": "Medium", "link": "https://leetcode.com/problems/daily-temperatures/" },
            { "name": "Online Stock Span", "difficulty": "Medium", "link": "https://leetcode.com/problems/online-stock-span/" },
            { "name": "132 Pattern", "difficulty": "Medium", "link": "https://leetcode.com/problems/132-pattern/" },
            { "name": "Number of Visible People in a Queue", "difficulty": "Hard", "link": "https://leetcode.com/problems/number-of-visible-people-in-a-queue/" },
            { "name": "Largest Rectangle in Histogram", "difficulty": "Hard", "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/" },

        ]
    },
    {
        "topic": "Queues",
        "problems": [
            { "name": "Number of Recent Calls", "difficulty": "Easy", "link": "https://leetcode.com/problems/number-of-recent-calls/" },
            { "name": "Time Needed to Buy Tickets", "difficulty": "Easy", "link": "https://leetcode.com/problems/time-needed-to-buy-tickets/" },
            { "name": "Reveal Cards In Increasing Order", "difficulty": "Medium", "link": "https://leetcode.com/problems/reveal-cards-in-increasing-order/" },
            { "name": "Time Needed to Buy Tickets", "difficulty": "Easy", "link": "https://leetcode.com/problems/time-needed-to-buy-tickets/" },
            { "name": "Rotting Oranges", "difficulty": "Medium", "link": "https://leetcode.com/problems/rotting-oranges/" },
            { "name": "Number of Recent Calls", "difficulty": "Easy", "link": "https://leetcode.com/problems/number-of-recent-calls/" }
        ]
    },
    {
        "topic": "Monotonic Queue",
        "problems": [
            { "name": "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit", "difficulty": "Medium", "link": "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/" },
            { "name": "Jump Game VI", "difficulty": "Medium", "link": "https://leetcode.com/problems/jump-game-vi/" },
            { "name": "Sliding Window Maximum", "difficulty": "Hard", "link": "https://leetcode.com/problems/sliding-window-maximum/" },
            { "name": "Max Value of Equation", "difficulty": "Hard", "link": "https://leetcode.com/problems/max-value-of-equation/" }
        ]
    },
    {
        "topic": "Bucket Sort",
        "problems": [
            { "name": "Sort Characters By Frequency", "difficulty": "Medium", "link": "https://leetcode.com/problems/sort-characters-by-frequency/" },
            { "name": "Top K Frequent Words", "difficulty": "Medium", "link": "https://leetcode.com/problems/top-k-frequent-words/" },
            { "name": "Maximum Gap", "difficulty": "Medium", "link": "https://leetcode.com/problems/maximum-gap/" }
        ]
    },
    {
        "topic": "Recursion",
        "problems": [
            { "name": "Merge Two Sorted Lists", "difficulty": "Easy", "link": "https://leetcode.com/problems/merge-two-sorted-lists/" },
            { "name": "Pow(x, n)", "difficulty": "Medium", "link": "https://leetcode.com/problems/powx-n/" },
            { "name": "Decode String", "difficulty": "Medium", "link": "https://leetcode.com/problems/decode-string/" },
            { "name": "Factorial Trailing Zeroes", "difficulty": "Easy", "link": "https://leetcode.com/problems/factorial-trailing-zeroes/" },
            { "name": "Power of Four", "difficulty": "Easy", "link": "https://leetcode.com/problems/power-of-four/" }
        ]
    },
    {
        "topic": "Divide and Conquer",
        "problems": [
            { "name": "Convert Sorted List to Binary Search Tree", "difficulty": "Medium", "link": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/" },
            { "name": "Construct Quad Tree", "difficulty": "Medium", "link": "https://leetcode.com/problems/construct-quad-tree/" },
            { "name": "Maximum Binary Tree", "difficulty": "Medium", "link": "https://leetcode.com/problems/maximum-binary-tree/" }
        ]
    },
    {
        "topic": "Merge Sort",
        "problems": [
            { "name": "Sort List", "difficulty": "Medium", "link": "https://leetcode.com/problems/sort-list/" },
            { "name": "Reverse Pairs", "difficulty": "Hard", "link": "https://leetcode.com/problems/reverse-pairs/" }
        ]
    },
    {
        "topic": "QuickSort / QuickSelect",
        "problems": [
            { "name": "Sort Colors", "difficulty": "Medium", "link": "https://leetcode.com/problems/sort-colors/" },
            { "name": "Kth Largest Element in an Array", "difficulty": "Medium", "link": "https://leetcode.com/problems/kth-largest-element-in-an-array/" }
        ]
    },
    {
        "topic": "Binary Search",
        "problems": [
            { "name": "Search Insert Position", "difficulty": "Easy", "link": "https://leetcode.com/problems/search-insert-position/" },
            { "name": "Find First and Last Position of Element in Sorted Array", "difficulty": "Medium", "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
            { "name": "Search in Rotated Sorted Array", "difficulty": "Medium", "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
            { "name": "Find Peak Element", "difficulty": "Medium", "link": "https://leetcode.com/problems/find-peak-element/" },
            { "name": "Random Pick with Weight", "difficulty": "Medium", "link": "https://leetcode.com/problems/random-pick-with-weight/" },
            { "name": "Koko Eating Bananas", "difficulty": "Medium", "link": "https://leetcode.com/problems/koko-eating-bananas/" },
            { "name": "Find Minimum in Rotated Sorted Array", "difficulty": "Medium", "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
            { "name": "Search a 2D Matrix", "difficulty": "Medium", "link": "https://leetcode.com/problems/search-a-2d-matrix/" },
            { "name": "Find in Mountain Array", "difficulty": "Hard", "link": "https://leetcode.com/problems/find-in-mountain-array/" },
            { "name": "Median of Two Sorted Arrays", "difficulty": "Hard", "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/" }
        ]
    },
    {
        "topic": "Backtracking",
        "problems": [
            { "name": "Generate Parentheses", "difficulty": "Medium", "link": "https://leetcode.com/problems/generate-parentheses/" },
            { "name": "Permutations", "difficulty": "Medium", "link": "https://leetcode.com/problems/permutations/" },
            { "name": "Subsets", "difficulty": "Medium", "link": "https://leetcode.com/problems/subsets/" },
            { "name": "Combination Sum", "difficulty": "Medium", "link": "https://leetcode.com/problems/combination-sum/" },
            { "name": "Combination Sum II", "difficulty": "Medium", "link": "https://leetcode.com/problems/combination-sum-ii/" },
            { "name": "Letter Combinations of a Phone Number", "difficulty": "Medium", "link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
            { "name": "Palindrome Partitioning", "difficulty": "Medium", "link": "https://leetcode.com/problems/palindrome-partitioning/" },
            { "name": "N-Queens", "difficulty": "Hard", "link": "https://leetcode.com/problems/n-queens/" }
        ]
    },
    {
        "topic": "Tree Traversal - Level Order",
        "problems": [
            { "name": "Binary Tree Level Order Traversal", "difficulty": "Medium", "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
            { "name": "Binary Tree Right Side View", "difficulty": "Medium", "link": "https://leetcode.com/problems/binary-tree-right-side-view/" },
            { "name": "Binary Tree Zigzag Level Order Traversal", "difficulty": "Medium", "link": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
            { "name": "Populating Next Right Pointers in Each Node II", "difficulty": "Medium", "link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/" },
            { "name": "Maximum Width of Binary Tree", "difficulty": "Medium", "link": "https://leetcode.com/problems/maximum-width-of-binary-tree/" }
        ]
    },
    {
        "topic": "Tree Traversal - Pre Order",
        "problems": [
            { "name": "Binary Tree Preorder Traversal", "difficulty": "Easy", "link": "https://leetcode.com/problems/binary-tree-preorder-traversal/" },
            { "name": "Same Tree", "difficulty": "Easy", "link": "https://leetcode.com/problems/same-tree/" },
            { "name": "Symmetric Tree", "difficulty": "Easy", "link": "https://leetcode.com/problems/symmetric-tree/" },
            { "name": "Binary Tree Paths", "difficulty": "Easy", "link": "https://leetcode.com/problems/binary-tree-paths/" },
            { "name": "Convert Sorted Array to Binary Search Tree", "difficulty": "Easy", "link": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/" },
            { "name": "Count Complete Tree Nodes", "difficulty": "Easy", "link": "https://leetcode.com/problems/count-complete-tree-nodes/" },
            { "name": "Path Sum III", "difficulty": "Medium", "link": "https://leetcode.com/problems/path-sum-iii/" },
            { "name": "Maximum Difference Between Node and Ancestor", "difficulty": "Medium", "link": "https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/" },
            { "name": "Construct Binary Tree from Preorder and Inorder Traversal", "difficulty": "Medium", "link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
            { "name": "Construct Binary Tree from Inorder and Postorder Traversal", "difficulty": "Medium", "link": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/" },
            { "name": "Serialize and Deserialize Binary Tree", "difficulty": "Hard", "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" }
        ]
    },
    {
        "topic": "Tree Traversal - In Order",
        "problems": [
            { "name": "Binary Tree Inorder Traversal", "difficulty": "Easy", "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
            { "name": "Minimum Distance Between BST Nodes", "difficulty": "Easy", "link": "https://leetcode.com/problems/minimum-distance-between-bst-nodes/" },
            { "name": "Minimum Absolute Difference in BST", "difficulty": "Easy", "link": "https://leetcode.com/problems/minimum-absolute-difference-in-bst/" },
            { "name": "Validate Binary Search Tree", "difficulty": "Medium", "link": "https://leetcode.com/problems/validate-binary-search-tree/" },
            { "name": "Kth Smallest Element in a BST", "difficulty": "Medium", "link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
            { "name": "Binary Search Tree Iterator", "difficulty": "Medium", "link": "https://leetcode.com/problems/binary-search-tree-iterator/" }
        ]
    },
    {
        "topic": "Tree Traversal - Post-Order",
        "problems": [
            { "name": "Binary Tree Postorder Traversal", "difficulty": "Easy", "link": "https://leetcode.com/problems/binary-tree-postorder-traversal/" },
            { "name": "Invert Binary Tree", "difficulty": "Easy", "link": "https://leetcode.com/problems/invert-binary-tree/" },
            { "name": "Diameter of Binary Tree", "difficulty": "Easy", "link": "https://leetcode.com/problems/diameter-of-binary-tree/" },
            { "name": "Delete Nodes And Return Forest", "difficulty": "Medium", "link": "https://leetcode.com/problems/delete-nodes-and-return-forest/" },
            { "name": "Lowest Common Ancestor of a Binary Tree", "difficulty": "Medium", "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
            { "name": "Find Duplicate Subtrees", "difficulty": "Medium", "link": "https://leetcode.com/problems/find-duplicate-subtrees/" },
            { "name": "Flatten Binary Tree to Linked List", "difficulty": "Medium", "link": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/" },
            { "name": "Distribute Coins in Binary Tree", "difficulty": "Medium", "link": "https://leetcode.com/problems/distribute-coins-in-binary-tree/" },
            { "name": "Binary Tree Maximum Path Sum", "difficulty": "Hard", "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/" }
        ]
    },
    {
        "topic": "BST / Ordered Set",
        "problems": [
            { "name": "Trim a Binary Search Tree", "difficulty": "Medium", "link": "https://leetcode.com/problems/trim-a-binary-search-tree/" },
            { "name": "My Calendar I", "difficulty": "Medium", "link": "https://leetcode.com/problems/my-calendar-i/" },
            { "name": "My Calendar II", "difficulty": "Medium", "link": "https://leetcode.com/problems/my-calendar-ii/" },
            { "name": "Stock Price Fluctuation", "difficulty": "Medium", "link": "https://leetcode.com/problems/stock-price-fluctuation/" }
        ]
    },
    {
        "topic": "Tries",
        "problems": [
            { "name": "Implement Trie (Prefix Tree)", "difficulty": "Medium", "link": "https://leetcode.com/problems/implement-trie-prefix-tree/" },
            { "name": "Design Add and Search Words Data Structure", "difficulty": "Medium", "link": "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
            { "name": "Search Suggestions System", "difficulty": "Medium", "link": "https://leetcode.com/problems/search-suggestions-system/" },
            { "name": "Longest Word in Dictionary", "difficulty": "Medium", "link": "https://leetcode.com/problems/longest-word-in-dictionary/" },
            { "name": "Maximum XOR of Two Numbers in an Array", "difficulty": "Medium", "link": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
            { "name": "Word Search II", "difficulty": "Hard", "link": "https://leetcode.com/problems/word-search-ii/" }
        ]
    },
    {
        "topic": "Heaps",
        "problems": [
            { "name": "Furthest Building You Can Reach", "difficulty": "Medium", "link": "https://leetcode.com/problems/furthest-building-you-can-reach/" },
            { "name": "Single-Threaded CPU", "difficulty": "Medium", "link": "https://leetcode.com/problems/single-threaded-cpu/" },
            { "name": "Process Tasks Using Servers", "difficulty": "Medium", "link": "https://leetcode.com/problems/process-tasks-using-servers/" }
        ]
    },
    {
        "topic": "Two Heaps",
        "problems": [
            { "name": "Find Median from Data Stream", "difficulty": "Hard", "link": "https://leetcode.com/problems/find-median-from-data-stream/" },
            { "name": "IPO", "difficulty": "Hard", "link": "https://leetcode.com/problems/ipo/" },
            { "name": "Sliding Window Median", "difficulty": "Hard", "link": "https://leetcode.com/problems/sliding-window-median/" }
        ]
    },
    {
        "topic": "Top K Elements",
        "problems": [
            { "name": "Kth Largest Element in a Stream", "difficulty": "Easy", "link": "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
            { "name": "Top K Frequent Elements", "difficulty": "Medium", "link": "https://leetcode.com/problems/top-k-frequent-elements/" },
            { "name": "K Closest Points to Origin", "difficulty": "Medium", "link": "https://leetcode.com/problems/k-closest-points-to-origin/" }
        ]
    },
    {
        "topic": "Intervals",
        "problems": [
            { "name": "Merge Intervals", "difficulty": "Medium", "link": "https://leetcode.com/problems/merge-intervals/" },
            { "name": "Insert Interval", "difficulty": "Medium", "link": "https://leetcode.com/problems/insert-interval/" },
            { "name": "Minimum Number of Arrows to Burst Balloons", "difficulty": "Medium", "link": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/" },
            { "name": "Maximum Number of Events That Can Be Attended", "difficulty": "Medium", "link": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/" },
            { "name": "Non-overlapping Intervals", "difficulty": "Medium", "link": "https://leetcode.com/problems/non-overlapping-intervals/" }
        ]
    },
    {
        "topic": "K-Way Merge",
        "problems": [
            { "name": "Find K Pairs with Smallest Sums", "difficulty": "Medium", "link": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/" },
            { "name": "Kth Smallest Element in a Sorted Matrix", "difficulty": "Medium", "link": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/" },
            { "name": "Merge k Sorted Lists", "difficulty": "Hard", "link": "https://leetcode.com/problems/merge-k-sorted-lists/" },
            { "name": "Smallest Range Covering Elements from K Lists", "difficulty": "Hard", "link": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/" }
        ]
    },
    {
        "topic": "Data Structure Design",
        "problems": [
            { "name": "Design Browser History", "difficulty": "Medium", "link": "https://leetcode.com/problems/design-browser-history/" },
            { "name": "Time Based Key-Value Store", "difficulty": "Medium", "link": "https://leetcode.com/problems/time-based-key-value-store/" },
            { "name": "Snapshot Array", "difficulty": "Medium", "link": "https://leetcode.com/problems/snapshot-array/" },
            { "name": "Design Twitter", "difficulty": "Medium", "link": "https://leetcode.com/problems/design-twitter/" },
            { "name": "LRU Cache", "difficulty": "Medium", "link": "https://leetcode.com/problems/lru-cache/" },
            { "name": "Insert Delete GetRandom O(1)", "difficulty": "Medium", "link": "https://leetcode.com/problems/insert-delete-getrandom-o1/" },
            { "name": "Design a Food Rating System", "difficulty": "Medium", "link": "https://leetcode.com/problems/design-a-food-rating-system/" },
            { "name": "Maximum Frequency Stack", "difficulty": "Hard", "link": "https://leetcode.com/problems/maximum-frequency-stack/" }
        ]
    },
    {
        "topic": "Greedy",
        "problems": [
            { "name": "Jump Game II", "difficulty": "Medium", "link": "https://leetcode.com/problems/jump-game-ii/" },
            { "name": "Minimum Add to Make Parentheses Valid", "difficulty": "Medium", "link": "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/" },
            { "name": "Gas Station", "difficulty": "Medium", "link": "https://leetcode.com/problems/gas-station/" },
            { "name": "Task Scheduler", "difficulty": "Medium", "link": "https://leetcode.com/problems/task-scheduler/" },
            { "name": "Minimum Cost to Hire K Workers", "difficulty": "Hard", "link": "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/" },
            { "name": "Candy", "difficulty": "Hard", "link": "https://leetcode.com/problems/candy/" },
            { "name": "Minimum Number of Refueling Stops", "difficulty": "Hard", "link": "https://leetcode.com/problems/minimum-number-of-refueling-stops/" }
        ]
    },
    {
        "topic": "Depth First Search (DFS)",
        "problems": [
            { "name": "Number of Islands", "difficulty": "Medium", "link": "https://leetcode.com/problems/number-of-islands/" },
            { "name": "Time Needed to Inform All Employees", "difficulty": "Medium", "link": "https://leetcode.com/problems/time-needed-to-inform-all-employees/" },
            { "name": "All Paths From Source to Target", "difficulty": "Medium", "link": "https://leetcode.com/problems/all-paths-from-source-to-target/" },
            { "name": "Clone Graph", "difficulty": "Medium", "link": "https://leetcode.com/problems/clone-graph/" },
            { "name": "Is Graph Bipartite?", "difficulty": "Medium", "link": "https://leetcode.com/problems/is-graph-bipartite/" },
            { "name": "All Nodes Distance K in Binary Tree", "difficulty": "Medium", "link": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/" },
            { "name": "Employee Importance", "difficulty": "Medium", "link": "https://leetcode.com/problems/employee-importance/" },
            { "name": "Surrounded Regions", "difficulty": "Medium", "link": "https://leetcode.com/problems/surrounded-regions/" },
            { "name": "Pacific Atlantic Water Flow", "difficulty": "Medium", "link": "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
            { "name": "Making A Large Island", "difficulty": "Hard", "link": "https://leetcode.com/problems/making-a-large-island/" }
        ]
    },
    {
        "topic": "Breadth First Search (BFS)",
        "problems": [
            { "name": "Rotting Oranges", "difficulty": "Medium", "link": "https://leetcode.com/problems/rotting-oranges/" },
            { "name": "01 Matrix", "difficulty": "Medium", "link": "https://leetcode.com/problems/01-matrix/" },
            { "name": "Open the Lock", "difficulty": "Medium", "link": "https://leetcode.com/problems/open-the-lock/" },
            { "name": "Shortest Path in a Grid with Obstacles Elimination", "difficulty": "Hard", "link": "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/" },
            { "name": "Bus Routes", "difficulty": "Hard", "link": "https://leetcode.com/problems/bus-routes/" },
            { "name": "Word Ladder", "difficulty": "Hard", "link": "https://leetcode.com/problems/word-ladder/" }
        ]
    },
    {
        "topic": "Topological Sort",
        "problems": [
            { "name": "Course Schedule II", "difficulty": "Medium", "link": "https://leetcode.com/problems/course-schedule-ii/" },
            { "name": "Find Eventual Safe States", "difficulty": "Medium", "link": "https://leetcode.com/problems/find-eventual-safe-states/" },
            { "name": "Minimum Height Trees", "difficulty": "Medium", "link": "https://leetcode.com/problems/minimum-height-trees/" },
            { "name": "Sort Items by Groups Respecting Dependencies", "difficulty": "Hard", "link": "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/" }
        ]
    },
    {
        "topic": "Union Find",
        "problems": [
            { "name": "Number of Provinces", "difficulty": "Medium", "link": "https://leetcode.com/problems/number-of-provinces/" },
            { "name": "Redundant Connection", "difficulty": "Medium", "link": "https://leetcode.com/problems/redundant-connection/" },
            { "name": "Accounts Merge", "difficulty": "Medium", "link": "https://leetcode.com/problems/accounts-merge/" },
            { "name": "Minimize Malware Spread", "difficulty": "Hard", "link": "https://leetcode.com/problems/minimize-malware-spread/" }
        ]
    },
    {
        "topic": "Minimum Spanning Tree",
        "problems": [
            { "name": "Min Cost to Connect All Points", "difficulty": "Medium", "link": "https://leetcode.com/problems/min-cost-to-connect-all-points/" }
        ]
    },
    {
        "topic": "Shortest Path",
        "problems": [
            { "name": "Network Delay Time", "difficulty": "Medium", "link": "https://leetcode.com/problems/network-delay-time/" },
            { "name": "Cheapest Flights Within K Stops", "difficulty": "Medium", "link": "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
            { "name": "Path with Maximum Probability", "difficulty": "Medium", "link": "https://leetcode.com/problems/path-with-maximum-probability/" },
            { "name": "Path With Minimum Effort", "difficulty": "Medium", "link": "https://leetcode.com/problems/path-with-minimum-effort/" }
        ]
    },
    {
        "topic": "Eulerian Circuit",
        "problems": [
            { "name": "Reconstruct Itinerary", "difficulty": "Hard", "link": "https://leetcode.com/problems/reconstruct-itinerary/" },
            { "name": "Cracking the Safe", "difficulty": "Hard", "link": "https://leetcode.com/problems/cracking-the-safe/" }
        ]
    },
    {
        "topic": "1-D DP",
        "problems": [
            { "name": "Climbing Stairs", "difficulty": "Easy", "link": "https://leetcode.com/problems/climbing-stairs/" },
            { "name": "Min Cost Climbing Stairs", "difficulty": "Easy", "link": "https://leetcode.com/problems/min-cost-climbing-stairs/" },
            { "name": "House Robber", "difficulty": "Medium", "link": "https://leetcode.com/problems/house-robber/" },
            { "name": "House Robber II", "difficulty": "Medium", "link": "https://leetcode.com/problems/house-robber-ii/" }
        ]
    },
    {
        "topic": "Knapsack DP",
        "problems": [
            { "name": "Partition Equal Subset Sum", "difficulty": "Medium", "link": "https://leetcode.com/problems/partition-equal-subset-sum/" },
            { "name": "Target Sum", "difficulty": "Medium", "link": "https://leetcode.com/problems/target-sum/" },
            { "name": "Last Stone Weight II", "difficulty": "Medium", "link": "https://leetcode.com/problems/last-stone-weight-ii/" }
        ]
    },
    {
        "topic": "Unbounded Knapsack DP",
        "problems": [
            { "name": "Coin Change", "difficulty": "Medium", "link": "https://leetcode.com/problems/coin-change/" },
            { "name": "Coin Change II", "difficulty": "Medium", "link": "https://leetcode.com/problems/coin-change-ii/" },
            { "name": "Perfect Squares", "difficulty": "Medium", "link": "https://leetcode.com/problems/perfect-squares/" }
        ]
    },
    {
        "topic": "Longest Increasing Subsequence DP",
        "problems": [
            { "name": "Longest Increasing Subsequence", "difficulty": "Medium", "link": "https://leetcode.com/problems/longest-increasing-subsequence/" },
            { "name": "Number of Longest Increasing Subsequence", "difficulty": "Medium", "link": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/" },
            { "name": "Russian Doll Envelopes", "difficulty": "Hard", "link": "https://leetcode.com/problems/russian-doll-envelopes/" }
        ]
    },
    {
        "topic": "2D (Grid) DP",
        "problems": [
            { "name": "Unique Paths II", "difficulty": "Medium", "link": "https://leetcode.com/problems/unique-paths-ii/" },
            { "name": "Minimum Path Sum", "difficulty": "Medium", "link": "https://leetcode.com/problems/minimum-path-sum/" },
            { "name": "Triangle", "difficulty": "Medium", "link": "https://leetcode.com/problems/triangle/" },
            { "name": "Count Square Submatrices with All Ones", "difficulty": "Medium", "link": "https://leetcode.com/problems/count-square-submatrices-with-all-ones/" },
            { "name": "Maximum Number of Points with Cost", "difficulty": "Medium", "link": "https://leetcode.com/problems/maximum-number-of-points-with-cost/" },
            { "name": "Burst Balloons", "difficulty": "Hard", "link": "https://leetcode.com/problems/burst-balloons/" },
            { "name": "Maximum Profit in Job Scheduling", "difficulty": "Hard", "link": "https://leetcode.com/problems/maximum-profit-in-job-scheduling/" },
            { "name": "Cherry Pickup", "difficulty": "Hard", "link": "https://leetcode.com/problems/cherry-pickup/" },
            { "name": "Longest Increasing Path in a Matrix", "difficulty": "Hard", "link": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/" }
        ]
    },
    {
        "topic": "String DP",
        "problems": [
            { "name": "Longest Common Subsequence", "difficulty": "Medium", "link": "https://leetcode.com/problems/longest-common-subsequence/" },
            { "name": "Edit Distance", "difficulty": "Medium", "link": "https://leetcode.com/problems/edit-distance/" },
            { "name": "Longest Palindromic Subsequence", "difficulty": "Medium", "link": "https://leetcode.com/problems/longest-palindromic-subsequence/" },
            { "name": "Decode Ways", "difficulty": "Medium", "link": "https://leetcode.com/problems/decode-ways/" },
            { "name": "Word Break", "difficulty": "Medium", "link": "https://leetcode.com/problems/word-break/" },
            { "name": "Interleaving String", "difficulty": "Medium", "link": "https://leetcode.com/problems/interleaving-string/" },
            { "name": "Wildcard Matching", "difficulty": "Hard", "link": "https://leetcode.com/problems/wildcard-matching/" },
            { "name": "Distinct Subsequences", "difficulty": "Hard", "link": "https://leetcode.com/problems/distinct-subsequences/" },
            { "name": "Palindrome Partitioning II", "difficulty": "Hard", "link": "https://leetcode.com/problems/palindrome-partitioning-ii/" }
        ]
    },
    {
        "topic": "Tree / Graph DP",
        "problems": [
            { "name": "House Robber III", "difficulty": "Medium", "link": "https://leetcode.com/problems/house-robber-iii/" },
            { "name": "Unique Binary Search Trees II", "difficulty": "Medium", "link": "https://leetcode.com/problems/unique-binary-search-trees-ii/" },
            { "name": "Number of Ways to Arrive at Destination", "difficulty": "Medium", "link": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/" },
            { "name": "Binary Tree Cameras", "difficulty": "Hard", "link": "https://leetcode.com/problems/binary-tree-cameras/" },
            { "name": "Sum of Distances in Tree", "difficulty": "Hard", "link": "https://leetcode.com/problems/sum-of-distances-in-tree/" }
        ]
    },
    {
        "topic": "Bitmask DP",
        "problems": [
            { "name": "Minimum Number of Work Sessions to Finish the Tasks", "difficulty": "Medium", "link": "https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/" },
            { "name": "Fair Distribution of Cookies", "difficulty": "Medium", "link": "https://leetcode.com/problems/fair-distribution-of-cookies/" },
            { "name": "Shortest Path Visiting All Nodes", "difficulty": "Hard", "link": "https://leetcode.com/problems/shortest-path-visiting-all-nodes/" }
        ]
    },
    {
        "topic": "Digit DP",
        "problems": [
            { "name": "Count Numbers with Unique Digits", "difficulty": "Medium", "link": "https://leetcode.com/problems/count-numbers-with-unique-digits/" },
            { "name": "Number of Digit One", "difficulty": "Hard", "link": "https://leetcode.com/problems/number-of-digit-one/" },
            { "name": "Numbers At Most N Given Digit Set", "difficulty": "Hard", "link": "https://leetcode.com/problems/numbers-at-most-n-given-digit-set/" }
        ]
    },
    {
        "topic": "Probability DP",
        "problems": [
            { "name": "Knight Probability in Chessboard", "difficulty": "Medium", "link": "https://leetcode.com/problems/knight-probability-in-chessboard/" },
            { "name": "Soup Servings", "difficulty": "Medium", "link": "https://leetcode.com/problems/soup-servings/" },
            { "name": "New 21 Game", "difficulty": "Medium", "link": "https://leetcode.com/problems/new-21-game/" }
        ]
    },
    {
        "topic": "State Machine DP",
        "problems": [
            { "name": "Best Time to Buy and Sell Stock with Cooldown", "difficulty": "Medium", "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/" },
            { "name": "Best Time to Buy and Sell Stock III", "difficulty": "Hard", "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/" }
        ]
    },
    {
        "topic": "String Matching",
        "problems": [
            { "name": "Repeated String Match", "difficulty": "Medium", "link": "https://leetcode.com/problems/repeated-string-match/" },
            { "name": "Shortest Palindrome", "difficulty": "Hard", "link": "https://leetcode.com/problems/shortest-palindrome/" }
        ]
    },
    {
        "topic": "Binary Indexed Tree / Segment Tree",
        "problems": [
            { "name": "Range Sum Query - Mutable", "difficulty": "Medium", "link": "https://leetcode.com/problems/range-sum-query-mutable/" },
            { "name": "Count of Smaller Numbers After Self", "difficulty": "Hard", "link": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" }
        ]
    },
    {
        "topic": "Maths / Geometry",
        "problems": [
            { "name": "Palindrome Number", "difficulty": "Easy", "link": "https://leetcode.com/problems/palindrome-number/" },
            { "name": "Reverse Integer", "difficulty": "Medium", "link": "https://leetcode.com/problems/reverse-integer/" },
            { "name": "Factorial Trailing Zeroes", "difficulty": "Medium", "link": "https://leetcode.com/problems/factorial-trailing-zeroes/" },
            { "name": "Valid Square", "difficulty": "Medium", "link": "https://leetcode.com/problems/valid-square/" },
            { "name": "Minimum Area Rectangle II", "difficulty": "Medium", "link": "https://leetcode.com/problems/minimum-area-rectangle-ii/" },
            { "name": "Max Points on a Line", "difficulty": "Hard", "link": "https://leetcode.com/problems/max-points-on-a-line/" }
        ]
    },
    {
        "topic": "Line Sweep",
        "problems": [
            { "name": "Minimum Interval to Include Each Query", "difficulty": "Hard", "link": "https://leetcode.com/problems/minimum-interval-to-include-each-query/" },
            { "name": "The Skyline Problem", "difficulty": "Hard", "link": "https://leetcode.com/problems/the-skyline-problem/" }
        ]
    },
    {
        "topic": "Suffix Array",
        "problems": [
            { "name": "Longest Duplicate Substring", "difficulty": "Hard", "link": "https://leetcode.com/problems/longest-duplicate-substring/" }
        ]
    }

    // Add more topics as needed
];
// State management
let appState = {
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    completed: JSON.parse(localStorage.getItem('completed')) || []
};

// DOM elements
const problemsContent = document.getElementById('problems-content');
const topicFilter = document.getElementById('topic-filter');
const difficultyFilter = document.getElementById('difficulty-filter');
const showFavorites = document.getElementById('show-favorites');
const showCompleted = document.getElementById('show-completed');
const searchInput = document.getElementById('search-problems');
const emptyMessage = document.getElementById('empty-message');

// Initialize the page
function init() {
    populateTopicFilter();
    renderProblems();
    updateGlobalProgress();
    setupEventListeners();
}

// Populate the topic filter dropdown
function populateTopicFilter() {
    topicFilter.innerHTML = '<option value="all">All Topics</option>';
    problemsData.forEach(topicData => {
        const option = document.createElement('option');
        option.value = topicData.topic;
        option.textContent = topicData.topic;
        topicFilter.appendChild(option);
    });
}

// Render all problems
function renderProblems() {
    problemsContent.innerHTML = '';
    let hasVisibleProblems = false;

    const selectedTopic = topicFilter.value;
    const selectedDifficulty = difficultyFilter.value;
    const searchTerm = searchInput.value.toLowerCase();
    const favoritesOnly = showFavorites.checked;
    const completedOnly = showCompleted.checked;

    problemsData.forEach(topicData => {
        if (selectedTopic !== 'all' && topicData.topic !== selectedTopic) return;

        const filteredProblems = topicData.problems.filter(problem => {
            if (selectedDifficulty !== 'all' && problem.difficulty !== selectedDifficulty) return false;
            if (searchTerm && !problem.name.toLowerCase().includes(searchTerm)) return false;
            if (favoritesOnly && !appState.favorites.includes(problem.name)) return false;
            if (completedOnly && !appState.completed.includes(problem.name)) return false;
            return true;
        });

        if (filteredProblems.length > 0) {
            hasVisibleProblems = true;
            renderTopicSection(topicData.topic, filteredProblems);
        }
    });

    emptyMessage.classList.toggle('show', !hasVisibleProblems);
}

// Render topic section
function renderTopicSection(topic, problems) {
    const topicSection = document.createElement('div');
    topicSection.className = 'topic-section';

    const topicHeader = document.createElement('div');
    topicHeader.className = 'topic-header';

    const totalProblems = problemsData.find(t => t.topic === topic).problems.length;
    const completedCount = problemsData.find(t => t.topic === topic).problems
        .filter(p => appState.completed.includes(p.name)).length;

    topicHeader.innerHTML = `
        <h3>${topic}</h3>
        <span class="progress-text">${completedCount} / ${totalProblems}</span>
    `;

    const table = document.createElement('table');
    table.className = 'problems-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>Status</th>
                <th>Problem</th>
                <th>Difficulty</th>
                <th>Solution</th>
                <th>Fav</th>
            </tr>
        </thead>
        <tbody>
            ${problems.map(problem => `
                <tr>
                    <td>
                        <input type="checkbox" class="status-checkbox" 
                            data-name="${problem.name}" 
                            ${appState.completed.includes(problem.name) ? 'checked' : ''}>
                    </td>
                    <td><a href="${problem.link}" class="problem-link" target="_blank">${problem.name}</a></td>
                    <td><span class="badge badge-${problem.difficulty.toLowerCase()}">${problem.difficulty}</span></td>
                    <td><button class="btn btn-danger solution-btn" data-title="${problem.name}">
                        <i class="fab fa-youtube"></i> Solution</button></td>
                    <td>
                        <button class="favorite-btn ${appState.favorites.includes(problem.name) ? 'active' : ''}" 
                                data-name="${problem.name}">
                            <i class="${appState.favorites.includes(problem.name) ? 'fas' : 'far'} fa-star"></i>
                        </button>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    `;

    topicHeader.addEventListener('click', () => {
        table.classList.toggle('show');
    });

    topicSection.appendChild(topicHeader);
    topicSection.appendChild(table);
    problemsContent.appendChild(topicSection);

    table.classList.add('show');

    addTableEventListeners(table);
}

// Event listeners for each table row
function addTableEventListeners(table) {
    table.querySelectorAll('.solution-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const problemName = this.dataset.title;
            const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(problemName + ' leetcode solution')}`;
            window.open(youtubeUrl, '_blank');
        });
    });

    table.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const problemName = this.dataset.name;
            const icon = this.querySelector('i');

            if (appState.favorites.includes(problemName)) {
                appState.favorites = appState.favorites.filter(name => name !== problemName);
                icon.classList.replace('fas', 'far');
                this.classList.remove('active');
            } else {
                appState.favorites.push(problemName);
                icon.classList.replace('far', 'fas');
                this.classList.add('active');
            }

            localStorage.setItem('favorites', JSON.stringify(appState.favorites));
            if (showFavorites.checked) renderProblems();
        });
    });

    table.querySelectorAll('.status-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const problemName = this.dataset.name;

            if (this.checked) {
                if (!appState.completed.includes(problemName)) {
                    appState.completed.push(problemName);
                }
            } else {
                appState.completed = appState.completed.filter(name => name !== problemName);
            }

            localStorage.setItem('completed', JSON.stringify(appState.completed));

            document.querySelectorAll('.topic-header').forEach(header => {
                const topic = header.querySelector('h3').textContent;
                const totalProblems = problemsData.find(t => t.topic === topic).problems.length;
                const completedCount = problemsData.find(t => t.topic === topic).problems
                    .filter(p => appState.completed.includes(p.name)).length;
                header.querySelector('.progress-text').textContent = `${completedCount} / ${totalProblems}`;
            });

            updateGlobalProgress();
            if (showCompleted.checked) renderProblems();
        });
    });
}

// Filter and login event listeners
function setupEventListeners() {
    topicFilter.addEventListener('change', renderProblems);
    difficultyFilter.addEventListener('change', renderProblems);
    showFavorites.addEventListener('change', renderProblems);
    showCompleted.addEventListener('change', renderProblems);
    searchInput.addEventListener('input', renderProblems);

    // Google login
    // Sign in button click
    document.getElementById('login-btn')?.addEventListener('click', () => {
        window.location.href = '/auth/google';
    });

    // On DOM load, check if user is logged in
    window.addEventListener('DOMContentLoaded', async () => {
        try {
            const res = await fetch('/api/user');
            const data = await res.json();

            if (data.loggedIn) {
                document.querySelector('.auth-buttons').innerHTML = `
                <span>👋 Hello, ${data.user.displayName}</span>
                <button onclick="window.location.href='/logout'">Logout</button>
            `;
            }
        } catch (err) {
            console.log('User not logged in.');
        }
    });

}

// Update global progress bar
function updateGlobalProgress() {
    const totalProblems = problemsData.reduce((sum, topic) => sum + topic.problems.length, 0);
    const completedCount = appState.completed.length;
    document.getElementById('global-progress').textContent = `${completedCount} / ${totalProblems}`;
}

// Start app
document.addEventListener('DOMContentLoaded', init);
