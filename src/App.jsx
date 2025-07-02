

function App() {
  const searchInfo = async()=>{
    try {
      const username = document.getElementById("searchInput").value;
      const response = await fetch(`https://api.github.com/users/${username}`)
      if(response.ok){
        const user_data = await response.json();
        console.log(user_data);
      document.getElementById("result").innerHTML = `
            <img src="${user_data.avatar_url}" alt="">
            <p>Name: ${user_data.name}</p>
            <p>Followers: ${user_data.followers}</p>
            <p>Following: ${user_data.following}</p>
            <p>Public rep: ${user_data.public_repos}</p>
            ${user_data.bio == null || "" ? "" : `<p>Bio: ${user_data.bio}</p>` }
            ${user_data.blog == null || user_data.blog == "" ? "" : `<p>Blog: ${user_data.blog}</p>` }
            <p>GitHub: <a href="${user_data.html_url}"> ${user_data.html_url}</a></p>
            <a href="${user_data.email == ""? `#`: user_data.email}">${user_data.email || ""}</a>
            `
      }
    document.getElementById("result").innerHTML = ` <p>User: ${username} not found</p>`
    }catch(err){
        console.log(err.message);
    }
}
  return (
    <>
    <div className="mx-auto flex flex-col items-center justify-center bg-purple-950 min-h-screen ">
      <div className="">
        <h1 className=" text-6xl text-teal-50 font-normal ">Welcome to Github Api</h1>
      </div>
      <div className="">
        <input className="bg-transparent font-normal text-xl w-5xl" type="text" placeholder="Enter the username" id="searchInput"/>
        <button className="bg-sky-500 hover:bg-sky-700 " onClick={() => searchInfo()}>Save changes</button>
        <div className="" id="result"></div>
      </div>
    </div>

    </>
  )
}

export default App
