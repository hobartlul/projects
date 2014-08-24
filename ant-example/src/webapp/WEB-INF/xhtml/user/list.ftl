<#escape x as x?html>
    <head>
        <title>User | List</title>
        <script type="text/javascript" src="${rc.contextPath}/js/insuretech.js"></script>
    </head>
    <body id="body">
        

        
        username : <input type="text" id="username"/><br/>
        <button type="button" id="create-user">Create User</button> <br/><br/>
        
        username : <input type="text" id="username-update"/><br/>
        <input type="hidden" id="username-update-id" value="12">
        <button type="button" id="update-user">Update User</button> <br/><br/>
        
        <button type="button" id="get-users">get user list</button> <br/><br/>
        
        <button type="button" id="get-user">get user</button> <br/><br/>
        
        <button type="button" id="delete-user">delete user</button> <br/><br/>

    </body>
</html>
</#escape>
