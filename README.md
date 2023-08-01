# wangyong-design

## Intro

A library that provides a lot of great components

## Quik Start

### 一、Card

#### Code

```tsx
import { FC } from "react"
import Card from "./components/Card"
import JamalMurray from "./assets/JamalMurray.webp"

const App:FC = () => {
   return <Card id={"001"} name={"Jamal Murray"} imgUrl={JamalMurray} captureTime={""} captureAddress={""} haveVehicle={true} />
}

export dcefault App
```

#### Preview

![alt](/src/assets/JamalMurray.png)