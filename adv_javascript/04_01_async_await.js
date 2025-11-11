function fetchPostData(){

    return new Promise( (resolve,reject)=>{

        setTimeout( ()=>{

            resolve("Post data fetched");

        },2000)
    });
}

function fetchCommentData(){

    return new Promise( (resolve,reject)=>{

        setTimeout(()=>{
            resolve("Comment data fetched ")
        },2000)
    });
}

async function fetchBlogData(){

    try {
        console.log("Fetching blog data");

        // const blogData = await fetchPostData();
        // const commentData = await fetchCommentData();

        //Better way of handling multiple promises 
        const [postData,commentData] = await Promise.all([
         
            fetchPostData(),fetchCommentData()

        ])

        console.log(postData);
        console.log(commentData);
        
        console.log("Fetch complete");
        
        
    } catch (error) {
        console.log("Error fetching blog data : "+error);
        
    }
}

fetchBlogData();