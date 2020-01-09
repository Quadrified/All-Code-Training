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

renderLogoutButton() {
    return (
      <View style={{flex: 1}}>
        <Button
          title="Logout"
          buttonStyle={{width: '90%', height: 60, margin: 20}}
          onPress={this.logOut}
        />
      </View>
    );
  }
//

// FB Login

<View>{this.FBAuth()}</View>
FBAuth() {
    return (
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          marginLeft: 120,
          marginTop: 30,
        }}>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                console.log(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        />
      </View>
    );
  }