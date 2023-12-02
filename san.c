int a[]={4,2,5,7,9,13,3,66,44},i,j,flag=0,n=9;
    for(i=0;i<n;i++){
        flag=0;
        for(j=2;j<a[i];j++){
            if(a[i]%j !==0){
                flag=1;
                break;
            }
        }
        if(flag==0){
         for(i=0;i<n;i++){
             
        printf("%d\t",a[i]);
        // printf(a[i])
         }
        }
        }
            
        
       

return 0;




// if (flag == 0) {
//       a[index++] = a[i];
//     }
//   }

//   n = index;