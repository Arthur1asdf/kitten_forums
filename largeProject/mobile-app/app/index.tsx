// app/index.tsx
import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="./screens/Login" />; // Redirect to Login first
}
