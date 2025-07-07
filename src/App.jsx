function App() {
  const searchInfo = async()=>{
    try {
      const username = document.getElementById("searchInput").value;
      const response = await fetch(`https://api.github.com/users/${username}`)
      if(response.ok){
        const user_data = await response.json();
        console.log(user_data);
      document.getElementById("result").innerHTML = `
            <img class="max-w-6/12 sm:min-w-6/12 md:min-w-6/12 lg:min-w-6/12
                        xl:min-w-6/12 2xl:min-w-6/12" src="${user_data.avatar_url}" alt="">
            <p>Name: ${user_data.name}</p>
            <p>Followers: ${user_data.followers}</p>
            <p>Following: ${user_data.following}</p>
            <p>Public rep: ${user_data.public_repos}</p>
            ${user_data.bio == null || "" ? "" : `<p>Bio: ${user_data.bio}</p>` }
            ${user_data.blog == null || user_data.blog == "" ? "" : `<p>Blog: ${user_data.blog}</p>` }
            <p>GitHub: <a href="${user_data.html_url}"> ${user_data.html_url}</a></p>
            <a href="${user_data.email == ""? `#`: user_data.email}">${user_data.email || ""}</a>
            `
      }else{
    document.getElementById("result").innerHTML = ` <p>User: ${username} not found</p>`
    }}catch(err){
        console.log(err.message);
    }
}
  return (
    <>
    <div className="mx-auto flex flex-col items-center justify-center bg-purple-950 min-h-screen ">
      <div className="">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-9xl text-teal-50 font-normal ">Welcome to Github Api</h1>
      </div>
      <div className="mt-4 sm:min-w-8/12 md:w-2xl lg:w-4xl xl:w-5xl 2xl:w-6xl justify-between">
        <input className="bg-transparent font-normal text-xl min-w-8/12" type="text" placeholder="Enter the username" id="searchInput"/>
        <button className="bg-sky-500 hover:bg-sky-700 sm:w-20" onClick={() => searchInfo()}>Search</button>
      </div>
      <div className="mt-4" id="result"></div>
    </div>

    </>
  )
}

export default App
