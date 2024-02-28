let current_users: string[] = ['alice', 'bob', 'charlie', 'dave', 'john']; // Current list of usernames
let new_users: string[] = ['john', 'emma', 'fred', 'alice', 'linda']; // New list of usernames

// Convert current usernames to lowercase for case-insensitive comparison
let current_users_lower = current_users.map(username => username.toLowerCase());

for (let new_user of new_users) {
    let new_user_lower = new_user.toLowerCase(); // Convert new username to lowercase for case-insensitive comparison

    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
}
