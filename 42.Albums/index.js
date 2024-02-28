function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Make three dictionaries representing different albums
var album1 = make_album('Artist1', 'Album1');
var album2 = make_album('Artist2', 'Album2', 12);
var album3 = make_album('Artist3', 'Album3', 8);
// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
//When you call make_album('Artist1', 'Album1'), it will return:
//{ artist: 'Artist1', title: 'Album1' }
//When you call make_album('Artist2', 'Album2', 12), it will return:
//{ artist: 'Artist2', title: 'Album2', tracks: 12 }
//When you call make_album('Artist3', 'Album3', 8), it will return:
//{ artist: 'Artist3', title: 'Album3', tracks: 8 }
