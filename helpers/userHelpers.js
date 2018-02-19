var passwordHash = require('password-hash');

module.exports.map_user_req = function (user, userDetails) {
    if (userDetails.username)
        user.username = userDetails.username;

    if (userDetails.password)
        user.password = passwordHash.generate(userDetails.password)

    if (userDetails.phone)
        user.phone = userDetails.phone;

    if (userDetails.email)
        user.email = userDetails.email;

    if (userDetails.email)
        user.address = {
            address1: userDetails.address1,
            address2: userDetails.address2,
            city: userDetails.city,
            zone: userDetails.zone
        }
    if (userDetails.inActiveStatus) {
        user.activeStatus = false;
    }

    return user;
}