//Logout functionality

<View>{this.renderLogoutButton()}</View>;
GooglelogOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    console.log("Logged out successfully");
  } catch (error) {
    console.error(error);
  }
};
//
