---
title: 'Introduction'
description: 'Start!'
pubDate: 'Jul 22 2022'
heroImage: '/blog-placeholder-4.jpg'
---

# Seoltab Frontend OverView

<!-- This document provides an introduction into your API. -->

### Introduction

이 문서는 Seoltab Frontend Project 및 사용 API 대한 설명을 제공합니다.

### Seoltab Frontend Project

| 프로젝트 이름               | 설명                 | URL                                                                                       |                                           Git                                           | Use App(WebView) |
|-----------------------|--------------------|-------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------:|:----------------:|
| seoltab.com           | 랜딩                 | <a href="https://seoltab.com" target="_blank">https://seoltab.com</a>                     |      <a href="https://github.com/GoodOnuii/seoltab.com" target="_blank">Github</a>      |      false       |
| accounts.seoltab.com  | 로그인, 회원가입, 마이페이지   | <a href="https://accounts.seoltab.com" target="_blank">https://accounts.seoltab.com</a>   | <a href="https://github.com/GoodOnuii/accounts.seoltab.com" target="_blank">Github</a>  |       true       |
| console.seoltab.com   | CS 어드민             | <a href="https://console.seoltab.com" target="_blank">https://console.seoltab.com</a>     |  <a href="https://github.com/GoodOnuii/console.seoltab.com" target="_blank">Github</a>  |      false       |
| workspace.seoltab.com | 컨텐츠 어드민            | <a href="https://workspace.seoltab.com" target="_blank">https://workspace.seoltab.com</a> | <a href="https://github.com/GoodOnuii/workspace.seoltab.com" target="_blank">Github</a> |      false       |
| data.seoltab.com      | AI진단               | <a href="https://data.seoltab.com" target="_blank">https://data.seoltab.com</a>           |   <a href="https://github.com/GoodOnuii/data.seoltab.com" target="_blank">Github</a>    |       true       |
| plot.seoltab.com      | Activity, Push 어드민 | <a href="https://plot.seoltab.com" target="_blank">https://plot.seoltab.com</a>           |   <a href="https://github.com/GoodOnuii/plot.seoltab.com" target="_blank">Github</a>    |      false       |
| ticket.seoltab.com    | 요청서                | <a href="https://ticket.seoltab.com" target="_blank">https://ticket.seoltab.com</a>       |  <a href="https://github.com/GoodOnuii/ticket.seoltab.com" target="_blank">Github</a>   |        ?         |
| port.seoltab.com      | 설탭북스 어드민           | <a href="https://port.seoltab.com" target="_blank">https://port.seoltab.com</a>           |   <a href="https://github.com/GoodOnuii/port.seoltab.com" target="_blank">Github</a>    |      false       |
| draw.seoltab.com      | 과외방                | <a href="https://draw.seoltab.com" target="_blank">https://draw.seoltab.com</a>           |   <a href="https://github.com/GoodOnuii/draw.seoltab.com" target="_blank">Github</a>    |       true       |
| pay.seoltab.com       | 가상 계좌              | <a href="https://pay.seoltab.com" target="_blank">https://pay.seoltab.com</a>             |    <a href="https://github.com/GoodOnuii/pay.seoltab.com" target="_blank">Github</a>    |      false       |
| chat.seoltab.com      | 앱내 과외 채팅방          | <a href="https://chat.seoltab.com" target="_blank">https://chat.seoltab.com</a>           |   <a href="https://github.com/GoodOnuii/chat.seoltab.com" target="_blank">Github</a>    |       true       |
| policies.seoltab.com  | 오누이, 설탭 정책         | <a href="https://policies.seoltab.com" target="_blank">https://policies.seoltab.com</a>   | <a href="https://github.com/GoodOnuii/policies.seoltab.com" target="_blank">Github</a>  |        ?         |
| ~order.seoltab.com~   | ~설탭북스 결제~          | <a href="https://order.seoltab.com" target="_blank">https://order.seoltab.com</a>         |   <a href="https://github.com/GoodOnuii/order.seoltab.com" target="_blank">Github</a>   |      false       |
| books.seoltab.com     | 설탭북스 결제            | <a href="https://books.seoltab.com" target="_blank">~https://books.seoltab.com~</a>       |   <a href="https://github.com/GoodOnuii/books.seoltab.com" target="_blank">Github</a>   |      false       |

### Using the API in Seoltab Web Project

프론트엔드에서 사용하는 모든 graphql 서버와의 통신은 gateway를 통하고 있으며 grpc를 통해서 각각의 도메인 서버와 데이터를 주고 받는다.

#### Graphql 
> Graphql 서버는 도메인명 사용

- Gateway
  - Production : <a href="https://api.gateway.seoltab.com/graphql" target="_blank">https://api.gateway.seoltab.com/graphql</a>
  - Stage : <a href="https://api.stage.gateway.seoltab.com/graphql" target="_blank">https://api.stage.gateway.seoltab.com/graphql</a>
  - Development : <a href="https://api.dev.gateway.seoltab.com/graphql" target="_blank">https://api.dev.gateway.seoltab.com/graphql</a>

- Auth
  - Production : <a href="https://api.auth.seoltab.com/graphql" target="_blank">https://api.auth.seoltab.com/graphql</a>
  - Stage : <a href="https://api.stage.auth.seoltab.com/graphql" target="_blank">https://api.stage.auth.seoltab.com/graphql</a>
  - Development : <a href="https://api.dev.auth.seoltab.com/graphql" target="_blank">https://api.dev.auth.seoltab.com/graphql</a>

#### Rest API
> Rest 서버는 도메인 명이 없기 때문에 평소 많이 사용하는 단어 사용

- Rest API (통칭 레거시)
    - Production : https://onuii.com
    - Stage : https://staging.onuii.com
    - Development : https://api.onuii.kr:443
- 피닉스 (통칭 서버리스)
    - Production : https://api.serverless.seoltab.com/
    - Stage : https://api.stage.serverless.seoltab.com/
    - Development : https://api.dev.serverless.seoltab.com/

