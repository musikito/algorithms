def bubbleSort(alist):

   #Setting the range for comparison (first round: n, second round: n-1  and so on)
   for i in range(len(alist)-1,0,-1):

      #Comparing within set range
       for j in range(i):

           #Comparing element with its right side neighbor
           if alist[j] > alist[j+1]:

               #swapping
               temp = alist[j]
               alist[j] = alist[j+1]
               alist[j+1] = temp

   return alist

print(bubbleSort([5,1,2,3,9,8,0]))