import {Button, TextView, contentView, Constraint, TextInput} from 'tabris';
import { loginRequest, ping } from './requests';



export class App {

  public start() {
    contentView.append(
      <$>

        
        <Button centerX bottom={[Constraint.prev, 200]} onSelect={this.sendParams}>Login</Button>
        <TextView centerX bottom={[Constraint.prev, 20]} font={{size: 24}}/>

        <TextInput centerX bottom={[Constraint.prev, 20]} width={200} id='password' type='password' text=''></TextInput>
        <TextView centerX bottom={[Constraint.prev, 10]} font = {{size:12}}>Password</TextView>

        <TextInput centerX bottom={[Constraint.prev, 20]} width={200} id='username' type='default' text=''></TextInput>
        <TextView centerX bottom={[Constraint.prev, 10]} font = {{size:12}}>Username</TextView>

        <Button centerX bottom={[Constraint.prev, 20]} onSelect={this.reachable}>Ping</Button>
        <TextView centerX bottom={[Constraint.prev, 20]} font={{size: 24}}/>


      </$>
    );
  }

  private reachable = async () => {
    await ping();
  }

  private sendParams = async () => {
    //@ts-expect-error
    const username = $('#username').first().text;
    //@ts-expect-error
    const password = $('#password').first().text;
    console.log('user: ', username);
    console.log('pass: ', password)

    await loginRequest(username, password)
  };

  
}
