var current_users = ['alice', 'bob', 'charlie', 'dave', 'john']; // Current list of usernames
var new_users = ['john', 'emma', 'fred', 'alice', 'linda']; // New list of usernames
// Convert current usernames to lowercase for case-insensitive comparison
var current_users_lower = current_users.map(function (username) { return username.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var new_user_lower = new_user.toLowerCase(); // Convert new username to lowercase for case-insensitive comparison
    if (current_users_lower.includes(new_user_lower)) {
        console.log("Sorry, the username \"".concat(new_user, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username \"".concat(new_user, "\" is available."));
    }
}
