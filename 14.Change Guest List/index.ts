let guestList: string [] = ["Kamran Tessori" , "Daniyal Naggori" , "Sir Zia Khan"]
let unableguest: string = "Kamran Tessori"
guestList.push("Zafar Abbas Jaffari")
for (let guest of guestList) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your company.\nSincerely, Ghous Ahmed`);
}
