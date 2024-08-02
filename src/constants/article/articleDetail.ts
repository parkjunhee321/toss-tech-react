import { ArticleContentTypes, SuccessTypes } from "../../types/article";

interface ApiResponse {
  resultType: string;
  error: null | string;
  success: SuccessTypes;
}

const articleDetail: ApiResponse = {
  resultType: "SUCCESS",
  error: null,
  success: {
    id: 86995,
    postId: 28738,
    title: "우리는 어떻게 해외주식 서비스 안정화를 이뤘는가",
    subtitle:
      "토스증권 해외주식 플랫폼 팀은 미국 주식을 중심으로 해외 주식 원장을 개발 및 운영하고 있어요. 현지에서 주식 매매를 대신 해주는 브로커와 어떤 통신 문제가 있었고, 문제를 어떻게 해결했는지 공유드립니다.",
    category: "개발",
    categories: [
      {
        name: "개발",
        id: 1024,
        slug: "tech",
        parentId: null,
        iconUrl: "",
      },
      {
        name: "인기글",
        id: 1058,
        slug: null,
        parentId: 1024,
        iconUrl: null,
      },
    ],
    series: null,
    data: [
      {
        id: "6cb35dce-b3d5-4ee0-81ce-88fad32a3de4",
        type: "heading_2",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        heading_2: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "토스증권 해외주식 서비스 소개",
              },
              type: "text",
              plain_text: "토스증권 해외주식 서비스 소개",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: " ✌️",
              },
              type: "text",
              plain_text: " ✌️",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-09T06:19:00.000Z",
      },
      {
        id: "cbe8bb5d-854a-4766-a934-a1b460646129",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "안녕하세요, 토스증권 Server Developer 김광훈입니다. 제가 근무하고 있는 해외주식 플랫폼 팀은 미국 주식을  중심으로 해외 주식 원장을 담당하고 있어요. 원장이란 증권 서비스에서 가장 주요한 영역 중 하나이며, 금융거래를 기록하는 장부를 말해요. 저희 팀에서는 고객의 주문, 자산, 권리 그리고 종목 정보 관리와 환전까지 해외주식 서비스 제공에 필요한 모든 거래와 정보들을 원장에 기록하는 개발과 운영을 하고 있어요.",
              },
              type: "text",
              plain_text:
                "안녕하세요, 토스증권 Server Developer 김광훈입니다. 제가 근무하고 있는 해외주식 플랫폼 팀은 미국 주식을  중심으로 해외 주식 원장을 담당하고 있어요. 원장이란 증권 서비스에서 가장 주요한 영역 중 하나이며, 금융거래를 기록하는 장부를 말해요. 저희 팀에서는 고객의 주문, 자산, 권리 그리고 종목 정보 관리와 환전까지 해외주식 서비스 제공에 필요한 모든 거래와 정보들을 원장에 기록하는 개발과 운영을 하고 있어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-12T01:30:00.000Z",
      },
      {
        id: "16e55191-fc85-43b8-b840-405eab75bbb9",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "이번 글에서는 저희 팀이 외부 브로커와 통신하고 있는 해외 주식 서비스를 안전하게 운영하기 위해 고민했던 내용을 공유하려고 합니다.",
              },
              type: "text",
              plain_text:
                "이번 글에서는 저희 팀이 외부 브로커와 통신하고 있는 해외 주식 서비스를 안전하게 운영하기 위해 고민했던 내용을 공유하려고 합니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-09T08:34:00.000Z",
      },
      {
        id: "24cafe3d-5754-4edd-839c-8ed7f6d0db48",
        type: "heading_2",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        heading_2: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "토스증권 미국 주식 매매 아키텍처",
              },
              type: "text",
              plain_text: "토스증권 미국 주식 매매 아키텍처",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-09T08:37:00.000Z",
      },
      {
        id: "0499f8b1-624f-4134-a342-e70bda923b1f",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/61c39559-f4fb-4e59-9330-9ff3350caf90/inner-0711-6.png",
          },
          type: "file",
          caption: [],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "6752717c-d213-4236-b503-fdc8634ed4c8",
          object: "user",
        },
        created_time: "2024-07-16T06:58:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "6752717c-d213-4236-b503-fdc8634ed4c8",
          object: "user",
        },
        last_edited_time: "2024-07-16T06:58:00.000Z",
      },
      {
        id: "fe8d9668-e2be-4b5d-84f7-f7405fe51d92",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "먼저, 미국 주식 매매 아키텍처를 같이 살펴볼게요. 사용자가 토스증권에서 매매 요청을 하면 현지 브로커로 요청을 보내고 브로커는 현지 미국 거래소에서 매매를 체결하고 응답을 보내는 구조입니다. 브로커라는 용어가 생소할 수 있는데요, 이름 그대로 주식 매매를 현지에서 처리를 해주는 역할을 하는 회사에요. 미국에서 직구를 할 때 중간에 상품을 현지에서 구매하고 한국으로 배송해주는 대행사와 비슷한 것이죠.",
              },
              type: "text",
              plain_text:
                "먼저, 미국 주식 매매 아키텍처를 같이 살펴볼게요. 사용자가 토스증권에서 매매 요청을 하면 현지 브로커로 요청을 보내고 브로커는 현지 미국 거래소에서 매매를 체결하고 응답을 보내는 구조입니다. 브로커라는 용어가 생소할 수 있는데요, 이름 그대로 주식 매매를 현지에서 처리를 해주는 역할을 하는 회사에요. 미국에서 직구를 할 때 중간에 상품을 현지에서 구매하고 한국으로 배송해주는 대행사와 비슷한 것이죠.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-12T00:19:00.000Z",
      },
      {
        id: "233ffa39-0db4-4d49-8779-90eec36d04b2",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "브로커와 통신은 HTTP, FIX 두 가지 프로토콜을 사용하고 있어요. 메인으로는 FIX 프로토콜을 사용하고 있고, 브로커 요구사항에 따라 HTTP 를 부분적으로 사용하여 요청 보내고 있어요. 요청에 대한 응답은 최종적으로 Kafka나 SQS와 같은 큐를 사용하여 비동기로 처리하고 있어요. ",
              },
              type: "text",
              plain_text:
                "브로커와 통신은 HTTP, FIX 두 가지 프로토콜을 사용하고 있어요. 메인으로는 FIX 프로토콜을 사용하고 있고, 브로커 요구사항에 따라 HTTP 를 부분적으로 사용하여 요청 보내고 있어요. 요청에 대한 응답은 최종적으로 Kafka나 SQS와 같은 큐를 사용하여 비동기로 처리하고 있어요. ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-09T08:25:00.000Z",
      },
      {
        id: "dde2231e-091c-4169-8fe1-9b5e3d9e7a54",
        type: "callout",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        callout: {
          icon: {
            type: "emoji",
            emoji: "💡",
          },
          color: "gray_background",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "FIX 프로토콜은 금융 서비스에서 사용하는 통신 프로토콜이에요. FIX 프로토콜은 HTTP 와 비교하면 장단점이 명확하여 엔지니어링 적으로 고민할 요소가 많다고 생각해요. 그래서 기회가 된다면 나중에 좀 더 자세히 다룰 예정입니다. 다만, 이번 글 주제와는 거리가 있어서 이 정도만 설명하고 넘어갈게요.  ",
              },
              type: "text",
              plain_text:
                "FIX 프로토콜은 금융 서비스에서 사용하는 통신 프로토콜이에요. FIX 프로토콜은 HTTP 와 비교하면 장단점이 명확하여 엔지니어링 적으로 고민할 요소가 많다고 생각해요. 그래서 기회가 된다면 나중에 좀 더 자세히 다룰 예정입니다. 다만, 이번 글 주제와는 거리가 있어서 이 정도만 설명하고 넘어갈게요.  ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T08:25:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-09T08:25:00.000Z",
      },
      {
        id: "489e39ab-84bf-47b6-820e-45ee88a888a4",
        type: "heading_2",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        heading_2: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "문제 원인 파악 😢",
              },
              type: "text",
              plain_text: "문제 원인 파악 😢",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T08:37:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-09T08:39:00.000Z",
      },
      {
        id: "c3791742-c62d-4889-9c48-003c6ae9a798",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "그럼 이제 토스증권에서 브로커와 통신하는 과정에서 어떤 문제가 왜 일어났는지 설명드릴게요. 아래 그림은 브로커 이슈로 문제가 된 상황 당시의 핀포인트 그래프입니다. 그래프를 보면 브로커 응답 시간이 조금씩 지연이 발생하였고, 지연된 주문들은 계속 대기하면서 쌓이게 되고 결국에는 5000ms 이상 응답이 ",
              },
              type: "text",
              plain_text:
                "그럼 이제 토스증권에서 브로커와 통신하는 과정에서 어떤 문제가 왜 일어났는지 설명드릴게요. 아래 그림은 브로커 이슈로 문제가 된 상황 당시의 핀포인트 그래프입니다. 그래프를 보면 브로커 응답 시간이 조금씩 지연이 발생하였고, 지연된 주문들은 계속 대기하면서 쌓이게 되고 결국에는 5000ms 이상 응답이 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: "걸리게 되면서 이슈가 발생한 것을 볼 수 있어요.",
              },
              type: "text",
              plain_text: "걸리게 되면서 이슈가 발생한 것을 볼 수 있어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T08:37:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-10T07:56:00.000Z",
      },
      {
        id: "d61a7825-5f5f-45c1-9db9-4925f905b76b",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/6182da8d-0f67-443e-aa6c-32f1d4d93f0c/Untitled.png",
          },
          type: "file",
          caption: [],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-16T07:39:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-16T07:39:00.000Z",
      },
      {
        id: "b8c76c9a-f04c-48fb-9a06-eed9a9bff5ab",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "문제의 원인은 크게 두 가지였어요.",
              },
              type: "text",
              plain_text: "문제의 원인은 크게 두 가지였어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T00:02:00.000Z",
      },
      {
        id: "44413770-ea8b-4b8e-b7fc-2fa17c442f3d",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "먼저 정규장 시작에 크게 뛰는 트래픽이었는데요. 아래 그래프는 주문 API 호출 건 수를 시간대별로 나타내고 있어요. 미국의 정규장 시작(22시30분)부터 호출 건 수가 급격히 증가하는 것을 볼 수 있어요. 해외주식 서비스 특성상 정규장 초반에 트래픽이 급격히 증가하고 최소 두 시간 정도는 지속돼요.",
              },
              type: "text",
              plain_text:
                "먼저 정규장 시작에 크게 뛰는 트래픽이었는데요. 아래 그래프는 주문 API 호출 건 수를 시간대별로 나타내고 있어요. 미국의 정규장 시작(22시30분)부터 호출 건 수가 급격히 증가하는 것을 볼 수 있어요. 해외주식 서비스 특성상 정규장 초반에 트래픽이 급격히 증가하고 최소 두 시간 정도는 지속돼요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  " TPS 를 정규장 시간과 아닌 시간을 비교해보면 20배 이상 차이가 나기에, 대부분의 운영 이슈는 정규장 오픈 초반에 발생할 수밖에 없어요.",
              },
              type: "text",
              plain_text:
                " TPS 를 정규장 시간과 아닌 시간을 비교해보면 20배 이상 차이가 나기에, 대부분의 운영 이슈는 정규장 오픈 초반에 발생할 수밖에 없어요.",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T08:45:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:01:00.000Z",
      },
      {
        id: "d1497ec4-fd0f-48bb-a10a-6e1cfb22ecb4",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/5d55bb53-88bf-45b3-9b08-16c2cb5cdf03/Untitled.png",
          },
          type: "file",
          caption: [],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-16T07:45:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-16T07:45:00.000Z",
      },
      {
        id: "dae10822-e8fa-437b-be83-095ffdd37d52",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "토스증권 사용자가 늘어나는 것도 문제의 원인이었어요.",
              },
              type: "text",
              plain_text:
                "토스증권 사용자가 늘어나는 것도 문제의 원인이었어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "해외주식 주문 증가 추세를 보기 위해 주문 접수 API 요청을 월 별로 집계를 해보았어요. 아래 그래프를 보면 계속 주문 수는 증가하고 있는 추세를 볼 수 있어요. 오픈 초기 주문 요청량 대비 현재 요청량을 비교해보면 약 30배 넘게 증가한 것을 볼 수 있었습니다.",
              },
              type: "text",
              plain_text:
                "해외주식 주문 증가 추세를 보기 위해 주문 접수 API 요청을 월 별로 집계를 해보았어요. 아래 그래프를 보면 계속 주문 수는 증가하고 있는 추세를 볼 수 있어요. 오픈 초기 주문 요청량 대비 현재 요청량을 비교해보면 약 30배 넘게 증가한 것을 볼 수 있었습니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T08:38:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-12T00:21:00.000Z",
      },
      {
        id: "7ee23904-9dd4-4992-b47c-0020198cc41d",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "서비스가 오픈하고 폭발적인 성장을 하게 되었고, 동시에 브로커도 함께 처리해야 하는 주문도 증가했어요. 그로 인하여 보이지 않았던 이슈들이 점차 수면 위로 올라왔고, 크고 작은 이슈들을 겪게 되었습니다. ",
              },
              type: "text",
              plain_text:
                "서비스가 오픈하고 폭발적인 성장을 하게 되었고, 동시에 브로커도 함께 처리해야 하는 주문도 증가했어요. 그로 인하여 보이지 않았던 이슈들이 점차 수면 위로 올라왔고, 크고 작은 이슈들을 겪게 되었습니다. ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T08:45:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-10T07:56:00.000Z",
      },
      {
        id: "a95cde35-bf9a-4f02-b559-7fb57f45e484",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/23b117bf-a855-442d-8714-3987f26e758d/Untitled.png",
          },
          type: "file",
          caption: [],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-16T07:48:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-16T07:48:00.000Z",
      },
      {
        id: "441c273b-f9e4-4551-a8c6-34c76fcee984",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "브로커와 통신 과정에서 이슈를 겪고 나서 팀에서는 통신 구간에 엔지니어링을 시작을 했고, 가장 먼저 브로커가 수용할 수 있는 최대 TPS 이상 보내지 않도록 트래픽 제어를 했어요. 트래픽을 조절해서 보냈음에도 ",
              },
              type: "text",
              plain_text:
                "브로커와 통신 과정에서 이슈를 겪고 나서 팀에서는 통신 구간에 엔지니어링을 시작을 했고, 가장 먼저 브로커가 수용할 수 있는 최대 TPS 이상 보내지 않도록 트래픽 제어를 했어요. 트래픽을 조절해서 보냈음에도 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: "브로커 측에서 ",
              },
              type: "text",
              plain_text: "브로커 측에서 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: "발생한 문제를 ",
              },
              type: "text",
              plain_text: "발생한 문제를 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "빠르게 감지하고 다른 브로커로 주문 요청을 보낼 수 있는 시스템",
              },
              type: "text",
              plain_text:
                "빠르게 감지하고 다른 브로커로 주문 요청을 보낼 수 있는 시스템",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "을 만들어야 했어요. 시스템을 어떻게 만들었는지 설명드릴게요.",
              },
              type: "text",
              plain_text:
                "을 만들어야 했어요. 시스템을 어떻게 만들었는지 설명드릴게요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "7b4c866f-dff1-4bd2-b568-ee0f7bd6a14f",
          object: "user",
        },
        created_time: "2024-07-16T07:41:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-16T07:47:00.000Z",
      },
      {
        id: "2f249bb8-2a50-4b0f-9f0a-c3b998bc1d9c",
        type: "heading_2",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        heading_2: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "1. 트래픽 제어 ",
              },
              type: "text",
              plain_text: "1. 트래픽 제어 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-09T08:55:00.000Z",
      },
      {
        id: "e1e42ca9-1ac3-427b-81a6-a9063aafa7c8",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/e1b95a95-2d24-4ec1-bf0d-d5ec27c12fd2/inner-0711-5.png",
          },
          type: "file",
          caption: [],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "6752717c-d213-4236-b503-fdc8634ed4c8",
          object: "user",
        },
        created_time: "2024-07-16T06:58:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "6752717c-d213-4236-b503-fdc8634ed4c8",
          object: "user",
        },
        last_edited_time: "2024-07-16T06:58:00.000Z",
      },
      {
        id: "e08aa4cb-e9ed-4293-8113-9fea2561c560",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "주식을 예약 주문해보신 경험이 있나요? 해외 주식도 예약 주문을 받는데요. 토스증권은 예약 주문을 들고 있다가, 실제 주문 요청은 정규장이 시작된 뒤에 배치로 보내고 있어요. 정규장 시작 후 대략 100만 건 이상의 예약 주문을 브로커로 보내게 되는데, 한 번에 보내면 브로커에 부하를 줄 수 있어요.",
              },
              type: "text",
              plain_text:
                "주식을 예약 주문해보신 경험이 있나요? 해외 주식도 예약 주문을 받는데요. 토스증권은 예약 주문을 들고 있다가, 실제 주문 요청은 정규장이 시작된 뒤에 배치로 보내고 있어요. 정규장 시작 후 대략 100만 건 이상의 예약 주문을 브로커로 보내게 되는데, 한 번에 보내면 브로커에 부하를 줄 수 있어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T08:48:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-12T00:22:00.000Z",
      },
      {
        id: "1ce23739-efe4-4262-8499-86f19bf8db14",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "그래서 브로커로 보내는 주문 요청 TPS를 제어를 할 필요가 생겼고, 이미 잘 만들어져 있는 ",
              },
              type: "text",
              plain_text:
                "그래서 브로커로 보내는 주문 요청 TPS를 제어를 할 필요가 생겼고, 이미 잘 만들어져 있는 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: "https://github.com/resilience4j/resilience4j",
              text: {
                link: {
                  url: "https://github.com/resilience4j/resilience4j",
                },
                content: "resilience4j",
              },
              type: "text",
              plain_text: "resilience4j",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "를 사용하여 간단하게 문제를 해결했어요. resilience4j 는 fault tolerance(내결함성)의 목적으로 나왔기 때문에 서킷 브레이커, 트래픽 제어, 재시도 등 분산 시스템 안정성과 탄력성을 높이기 위한 기능들을 지원해요.",
              },
              type: "text",
              plain_text:
                "를 사용하여 간단하게 문제를 해결했어요. resilience4j 는 fault tolerance(내결함성)의 목적으로 나왔기 때문에 서킷 브레이커, 트래픽 제어, 재시도 등 분산 시스템 안정성과 탄력성을 높이기 위한 기능들을 지원해요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:02:00.000Z",
      },
      {
        id: "b78dec59-7904-4fb4-8638-3e1ed88984bf",
        code: {
          caption: [],
          language: "kotlin",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  'class BatchJob {\n\n    lateinit var rateLimiter: RateLimiter\n    \n    companion object {\n        private const val JOB_CODE = "TradePreparedOrderExecutorJob"\n    }\n    \n    fun run(context: RunContext): BatchResponse {\n        val tps = arguments[2].toInt()\n        rateLimiter = RateLimiterCreator.of(\n\t\t        limitRefreshPeriod = Duration.ofSeconds(1), \n\t\t        limitForPeriod = tps, \n\t\t        name = JOB_CODE\n\t      )\n\t      \n\t      rateLimiter.executeRunnable {\n            preparedOrderBrokerRequestFacade.sendOrder()\n        }\n    }\n}',
              },
              type: "text",
              plain_text:
                'class BatchJob {\n\n    lateinit var rateLimiter: RateLimiter\n    \n    companion object {\n        private const val JOB_CODE = "TradePreparedOrderExecutorJob"\n    }\n    \n    fun run(context: RunContext): BatchResponse {\n        val tps = arguments[2].toInt()\n        rateLimiter = RateLimiterCreator.of(\n\t\t        limitRefreshPeriod = Duration.ofSeconds(1), \n\t\t        limitForPeriod = tps, \n\t\t        name = JOB_CODE\n\t      )\n\t      \n\t      rateLimiter.executeRunnable {\n            preparedOrderBrokerRequestFacade.sendOrder()\n        }\n    }\n}',
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        type: "code",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T00:50:00.000Z",
      },
      {
        id: "f5217adf-08f8-4a2f-b665-21da47342cf1",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "위 코드는 예약 주문 배치 코드 예시입니다. 파라미터로 TPS를 받고, ",
              },
              type: "text",
              plain_text:
                "위 코드는 예약 주문 배치 코드 예시입니다. 파라미터로 TPS를 받고, ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: "rateLimiter",
              },
              type: "text",
              plain_text: "rateLimiter",
              annotations: {
                bold: false,
                code: true,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  " 객체를 입력받은 TPS로 객체 생성을 하고, runnable로 주문 요청하는 파라미터를 넘기면 TPS 파라미터 수만큼 요청을 제한해서 할 수 있어요.",
              },
              type: "text",
              plain_text:
                " 객체를 입력받은 TPS로 객체 생성을 하고, runnable로 주문 요청하는 파라미터를 넘기면 TPS 파라미터 수만큼 요청을 제한해서 할 수 있어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:02:00.000Z",
      },
      {
        id: "0535f7b6-2100-41d6-8448-d2dd123f688c",
        code: {
          caption: [],
          language: "kotlin",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "object RateLimiterCreator {\n\n    private val DEFAULT_TIMEOUT_DURATION = Duration.ofSeconds(5) // resilience4j 기본 설정\n\n    fun of(\n        limitRefreshPeriod: Duration,\n        limitForPeriod: Int,\n        name: String,\n        timeoutDuration: Duration = DEFAULT_TIMEOUT_DURATION,\n    ): RateLimiter {\n        val config = RateLimiterConfig.custom()\n            .limitRefreshPeriod(limitRefreshPeriod)\n            .limitForPeriod(limitForPeriod)\n            .timeoutDuration(timeoutDuration)\n            .build()\n\n        val registry = RateLimiterRegistry.of(config)\n        val rateLimiter = registry.rateLimiter(name)\n\n        return rateLimiter\n    }\n}",
              },
              type: "text",
              plain_text:
                "object RateLimiterCreator {\n\n    private val DEFAULT_TIMEOUT_DURATION = Duration.ofSeconds(5) // resilience4j 기본 설정\n\n    fun of(\n        limitRefreshPeriod: Duration,\n        limitForPeriod: Int,\n        name: String,\n        timeoutDuration: Duration = DEFAULT_TIMEOUT_DURATION,\n    ): RateLimiter {\n        val config = RateLimiterConfig.custom()\n            .limitRefreshPeriod(limitRefreshPeriod)\n            .limitForPeriod(limitForPeriod)\n            .timeoutDuration(timeoutDuration)\n            .build()\n\n        val registry = RateLimiterRegistry.of(config)\n        val rateLimiter = registry.rateLimiter(name)\n\n        return rateLimiter\n    }\n}",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        type: "code",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:20:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-09T06:20:00.000Z",
      },
      {
        id: "1d08c4ea-ee17-44e3-8cdd-fce540eef209",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "위 코드는 ",
              },
              type: "text",
              plain_text: "위 코드는 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: "RateLimiterConfig",
              },
              type: "text",
              plain_text: "RateLimiterConfig",
              annotations: {
                bold: false,
                code: true,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: " 를 생성하는 코드예요.",
              },
              type: "text",
              plain_text: " 를 생성하는 코드예요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "254f0528-ef98-4995-81d5-70319ba4f7a1",
          object: "user",
        },
        last_edited_time: "2024-07-10T11:05:00.000Z",
      },
      {
        id: "99d39ca8-a1f5-4bde-9c31-209be6626b03",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "설정값들을 yml 파일로 관리할 수 있지만, 배치잡 파라미터로 TPS를 제어하고 배치를 실행할 때 TPS를 결정하고 싶어 코드로 관리하는 선택을 했어요. 아래 이미지에 보이듯이 간단하게 파라미터만 넘기면 배치에서 브로커로 요청하는 TPS를 결정할 수 있어요.",
              },
              type: "text",
              plain_text:
                "설정값들을 yml 파일로 관리할 수 있지만, 배치잡 파라미터로 TPS를 제어하고 배치를 실행할 때 TPS를 결정하고 싶어 코드로 관리하는 선택을 했어요. 아래 이미지에 보이듯이 간단하게 파라미터만 넘기면 배치에서 브로커로 요청하는 TPS를 결정할 수 있어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-16T07:52:00.000Z",
      },
      {
        id: "7fe6ade5-5e59-4b9d-ae5e-ddda1abd4071",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/e4a60741-ff3a-45c8-9871-f530ea58ec3c/Untitled.png",
          },
          type: "file",
          caption: [],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        created_time: "2024-07-16T07:52:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-16T07:52:00.000Z",
      },
      {
        id: "fd8c2b1c-627f-4118-8f6a-0f3d19b7a9f9",
        type: "heading_2",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        heading_2: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "2. 빠른 이상 탐지 및 브로커 전환",
              },
              type: "text",
              plain_text: "2. 빠른 이상 탐지 및 브로커 전환",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-10T07:52:00.000Z",
      },
      {
        id: "caaaea6b-ad90-44ef-b1e7-04d8e58815e3",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "미국 주식 장 운영 시간 특성상 브로커 이는 주로 새벽에 발생하고, 사람이 수동으로 대응을 하기에는 한계가 있었어요. 수동으로 브로커 이슈를 감지하기 위해서는 사람이 24시간 대기를 해야 하고, 담당자가 문제가 발생했는지아닌지 판단을 하는 순간에 피해 규모는 점점 더 커질 수 있어요.",
              },
              type: "text",
              plain_text:
                "미국 주식 장 운영 시간 특성상 브로커 이는 주로 새벽에 발생하고, 사람이 수동으로 대응을 하기에는 한계가 있었어요. 수동으로 브로커 이슈를 감지하기 위해서는 사람이 24시간 대기를 해야 하고, 담당자가 문제가 발생했는지아닌지 판단을 하는 순간에 피해 규모는 점점 더 커질 수 있어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-10T07:54:00.000Z",
      },
      {
        id: "c301df37-96cd-419e-9ccf-fb467558573c",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "그래서 메인 브로커 이슈가 감지되면 미리 정해둔 룰에 의해 시스템이 감지하고 서브 브로커로 주문을 보낼 수 있는 이상 감지 시스템을 만들게 되었어요.",
              },
              type: "text",
              plain_text:
                "그래서 메인 브로커 이슈가 감지되면 미리 정해둔 룰에 의해 시스템이 감지하고 서브 브로커로 주문을 보낼 수 있는 이상 감지 시스템을 만들게 되었어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:20:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-10T07:54:00.000Z",
      },
      {
        id: "ddae31db-912a-48b7-9736-c0bb503d70cb",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/5fdac587-d9f9-449f-a3b8-d568b74ba280/inner-0711-4.png",
          },
          type: "file",
          caption: [],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "6752717c-d213-4236-b503-fdc8634ed4c8",
          object: "user",
        },
        created_time: "2024-07-16T06:59:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "6752717c-d213-4236-b503-fdc8634ed4c8",
          object: "user",
        },
        last_edited_time: "2024-07-16T06:59:00.000Z",
      },
      {
        id: "1604a014-50f2-49b6-9e43-e687495d5307",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "위 그림은 설계 당시 요구사항이에요. 요구사항을 토대로 팀에서는 브로커 이상 감지되면 결과를 이벤트로 발행하고 이벤트를 구독한 시스템에서 자율적으로 대응할 수 있는 시스템을 만들었어요. 이상 감지 시스템도 역시 잘 만들어진 Grafana, kibana 등의 모니터링 도구를 사용하여 쉽게 구축을 할 수 있었어요. ",
              },
              type: "text",
              plain_text:
                "위 그림은 설계 당시 요구사항이에요. 요구사항을 토대로 팀에서는 브로커 이상 감지되면 결과를 이벤트로 발행하고 이벤트를 구독한 시스템에서 자율적으로 대응할 수 있는 시스템을 만들었어요. 이상 감지 시스템도 역시 잘 만들어진 Grafana, kibana 등의 모니터링 도구를 사용하여 쉽게 구축을 할 수 있었어요. ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-10T07:54:00.000Z",
      },
      {
        id: "10f25aed-2bb6-41b1-86fa-da161d4667cd",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "각 모니터링 도구는 설정한 룰에 매칭이 되면 이상 감지 시스템 API를 호출해서 정보를 제공하는 방식으로 설계했어요. 이후에 이상 감지 시스템은 Kafka 이벤트를 발행하고 각 토픽을 구독하고 있는 시스템에 이슈 상황을 전파를 할 수 있어요. 결국에 하나의 토픽을 여러 시스템이 구독하고 있는 구조이다 보니 자연스럽게 규격화된 JSON 구조를 여러 시스템이 사용할 수 있어요.",
              },
              type: "text",
              plain_text:
                "각 모니터링 도구는 설정한 룰에 매칭이 되면 이상 감지 시스템 API를 호출해서 정보를 제공하는 방식으로 설계했어요. 이후에 이상 감지 시스템은 Kafka 이벤트를 발행하고 각 토픽을 구독하고 있는 시스템에 이슈 상황을 전파를 할 수 있어요. 결국에 하나의 토픽을 여러 시스템이 구독하고 있는 구조이다 보니 자연스럽게 규격화된 JSON 구조를 여러 시스템이 사용할 수 있어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-10T07:55:00.000Z",
      },
      {
        id: "edcc56f0-6b02-4c3f-a748-0f5126c22559",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "이번 글에서는 Grafana로 어떻게 이상",
              },
              type: "text",
              plain_text: "이번 글에서는 Grafana로 어떻게 이상",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: " 감지 시스템",
              },
              type: "text",
              plain_text: " 감지 시스템",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "을 구축 했는지 더 자세히 설명드릴게요. Grafana를 사용한 이유는 로그보다는 시스템 메트릭으로 조건 지정을 하고 싶었고, 이슈를 대응할 때 그래프 시각화 정보도 중요하다고 생각했기 때문이에요.",
              },
              type: "text",
              plain_text:
                "을 구축 했는지 더 자세히 설명드릴게요. Grafana를 사용한 이유는 로그보다는 시스템 메트릭으로 조건 지정을 하고 싶었고, 이슈를 대응할 때 그래프 시각화 정보도 중요하다고 생각했기 때문이에요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-15T04:22:00.000Z",
      },
      {
        id: "5f8f863e-108e-4e7f-87f4-99c73638860b",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "이제 Grafana 설정을 어떻게 했는지 간단히 살펴봐요. Grafana 버전에 따라 세팅 설정 상이할 수 있어요. 이번 글에서는 v10.4.1 기준으로 작성했어요.",
              },
              type: "text",
              plain_text:
                "이제 Grafana 설정을 어떻게 했는지 간단히 살펴봐요. Grafana 버전에 따라 세팅 설정 상이할 수 있어요. 이번 글에서는 v10.4.1 기준으로 작성했어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-09T08:54:00.000Z",
      },
      {
        id: "52918dbf-55c8-42a2-8a02-9b28cd2f55d5",
        type: "heading_3",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        heading_3: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "Notification policy",
              },
              type: "text",
              plain_text: "Notification policy",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-09T09:01:00.000Z",
      },
      {
        id: "a9f61513-f283-49c7-8971-10a1a20c3791",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "먼저 웹훅 세팅을 위해 Notification policy를 먼저 살펴볼게요. 원하는 이름을 설정과 Contact point 설정이 필요해요. Contact point로 알림을 어떻게 보낼지도 설정할 수 있어요.",
              },
              type: "text",
              plain_text:
                "먼저 웹훅 세팅을 위해 Notification policy를 먼저 살펴볼게요. 원하는 이름을 설정과 Contact point 설정이 필요해요. Contact point로 알림을 어떻게 보낼지도 설정할 수 있어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T09:02:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-12T00:23:00.000Z",
      },
      {
        id: "049389eb-728c-4486-8e3e-2d1ca80c57d1",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "설정한 Contact point를 살펴보면, Intergration을 Webhook 으로 설정하고 URL 탭에 이상 감지 시스템 API 를  작성을 하면 돼요.",
              },
              type: "text",
              plain_text:
                "설정한 Contact point를 살펴보면, Intergration을 Webhook 으로 설정하고 URL 탭에 이상 감지 시스템 API 를  작성을 하면 돼요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T09:02:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-10T07:55:00.000Z",
      },
      {
        id: "2a5f40e4-bb78-4d54-8f8e-d0ad05d33c72",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/f53525c5-38c5-425a-a205-3db9da40daea/Untitled.png",
          },
          type: "file",
          caption: [],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-16T07:33:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-16T07:33:00.000Z",
      },
      {
        id: "a96eee28-3173-4d60-8258-56b380f84227",
        type: "heading_3",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        heading_3: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "Alert rule",
              },
              type: "text",
              plain_text: "Alert rule",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-09T08:55:00.000Z",
      },
      {
        id: "7787a54d-c4d2-4acc-aa0d-a5aef55e1b36",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "여기까지 Notification policy 생성하는 방법에 대하여 간단하게 알아봤어요. 이제 Alert rule 을 생성하고 생성한 rule 에 Notification policy 를 붙여주면 끝이에요. ",
              },
              type: "text",
              plain_text:
                "여기까지 Notification policy 생성하는 방법에 대하여 간단하게 알아봤어요. 이제 Alert rule 을 생성하고 생성한 rule 에 Notification policy 를 붙여주면 끝이에요. ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-09T09:03:00.000Z",
      },
      {
        id: "20072a1e-24be-4323-90b2-859a6943cbe3",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "Alert rule 설정하는 것을 살펴보면 쿼리는 1분 동안 API 요청이 실패한 개수를 카운트하도록 했어요. 그리고 alert 조건으로 위 쿼리로 수집된 에러 API 개수가 100 개가 넘으면 발생하도록 설정했어요.",
              },
              type: "text",
              plain_text:
                "Alert rule 설정하는 것을 살펴보면 쿼리는 1분 동안 API 요청이 실패한 개수를 카운트하도록 했어요. 그리고 alert 조건으로 위 쿼리로 수집된 에러 API 개수가 100 개가 넘으면 발생하도록 설정했어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T09:03:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:02:00.000Z",
      },
      {
        id: "61ebf728-e5cd-43be-80fd-b476b541896f",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/0e7000c6-7f8f-4938-af02-d3c48faf7d6d/Untitled.png",
          },
          type: "file",
          caption: [],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        created_time: "2024-07-15T04:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-15T04:19:00.000Z",
      },
      {
        id: "977c143a-4fba-4992-ad22-a8c7a97a01a9",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [],
        },
        created_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        created_time: "2024-07-15T04:17:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-15T04:17:00.000Z",
      },
      {
        id: "432ae53a-da20-4ef8-8d0f-3fd6689175e8",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "이제 alert 조건 만족이 얼마나 지속이 될 때, 알림을 트리거할지 설정해주세요. Evaluation interval 과 pending period를 설정할 수 있어요. Evaluation interval는 위에서 작성한 쿼리 결과를 어느 주기로 체크할지 설정할 수 있고, pending period는 위에서 classic condition으로 작성한 조건이 만족하고 어느 기간 동안 만족하면 alert 을 발생시킬지 설정하는 값이에요.",
              },
              type: "text",
              plain_text:
                "이제 alert 조건 만족이 얼마나 지속이 될 때, 알림을 트리거할지 설정해주세요. Evaluation interval 과 pending period를 설정할 수 있어요. Evaluation interval는 위에서 작성한 쿼리 결과를 어느 주기로 체크할지 설정할 수 있고, pending period는 위에서 classic condition으로 작성한 조건이 만족하고 어느 기간 동안 만족하면 alert 을 발생시킬지 설정하는 값이에요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:03:00.000Z",
      },
      {
        id: "8790d697-a159-470e-88be-499332f49964",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "예를 들어 evaluation interval를 30초 그리고 pending period를 3분으로 설정을 했다면, 30초 주기로 쿼리 결과를 체크하고 만약 classic condition을 만족했다면, 만족한 시점 이후로 3분 동안 지속이 된다면 alert 을 발생하게 돼요.",
              },
              type: "text",
              plain_text:
                "예를 들어 evaluation interval를 30초 그리고 pending period를 3분으로 설정을 했다면, 30초 주기로 쿼리 결과를 체크하고 만약 classic condition을 만족했다면, 만족한 시점 이후로 3분 동안 지속이 된다면 alert 을 발생하게 돼요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T09:03:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:03:00.000Z",
      },
      {
        id: "9c8860a2-ab5e-4d9a-8ae8-565d210f0e7d",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/9c6fe181-0662-490e-abe8-a37f050c7f81/Untitled.png",
          },
          type: "file",
          caption: [],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        created_time: "2024-07-15T04:18:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-15T04:18:00.000Z",
      },
      {
        id: "5905509f-0e68-47f2-8744-7c626566ea36",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [],
        },
        created_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        created_time: "2024-07-15T04:18:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-15T04:18:00.000Z",
      },
      {
        id: "fcf95343-055f-494b-9e49-b2d040d56b91",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "아래 Enum 코드는 alert이 발생했을 때, 이상 감지 시스템에서 제공하는 상태 타입이에요.",
              },
              type: "text",
              plain_text:
                "아래 Enum 코드는 alert이 발생했을 때, 이상 감지 시스템에서 제공하는 상태 타입이에요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-10T07:57:00.000Z",
      },
      {
        id: "8f014436-443a-45d8-8c70-3122938a5365",
        code: {
          caption: [],
          language: "kotlin",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "enum class SystemStatus {\n    HEALTHY,    // 시스템이 정상\n    CAUTION,    // 시스템에 문제가 있을 수도 있음. 알아서 판단\n    CRITICAL    // 시스템 down\n}",
              },
              type: "text",
              plain_text:
                "enum class SystemStatus {\n    HEALTHY,    // 시스템이 정상\n    CAUTION,    // 시스템에 문제가 있을 수도 있음. 알아서 판단\n    CRITICAL    // 시스템 down\n}",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        type: "code",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:03:00.000Z",
      },
      {
        id: "4f7a9520-44eb-4da9-a14e-36e8c710b17b",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "이상 감지 시스템에서는 모니터링 도구로부터 API 호출을 받고 전달받은 데이터를 기반으로 위 세 가지 타입 중 하나를 택하여 Kafka 이벤트를 발행하게 돼요. ",
              },
              type: "text",
              plain_text:
                "이상 감지 시스템에서는 모니터링 도구로부터 API 호출을 받고 전달받은 데이터를 기반으로 위 세 가지 타입 중 하나를 택하여 Kafka 이벤트를 발행하게 돼요. ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-10T07:57:00.000Z",
      },
      {
        id: "6ac7a4fc-3822-49b2-a48a-0513b2711cb6",
        code: {
          caption: [],
          language: "kotlin",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  '@Component\nclass BrokerFailOverConsumer(\n    private val brokerFailoverService: BrokerFailoverService,\n    private val slackSender: SlackSender,\n) {\n    private val log = KotlinLogging.logger { }\n\n    @KafkaListener(\n        topics = ["topicName"],\n        clientIdPrefix = "appName",\n        containerFactory = "falioverContainerFactory"\n    )\n    fun consume(record: ConsumerRecord<String, String>) {\n        val json = record.value()\n        log.info { "system-status-event consume: $json" }\n\n        val message = JsonUtil.fromJson(record.value(), SystemStatusRecord::class.java)\n        \n        when (message.status) {\n            SystemStatus.CRITICAL -> {\n                slackSender.sendCriticalSlackMessage(message)\n                brokerFailoverService.failover()\n            }\n            SystemStatus.CAUTION -> {\n                log.info { "브로커 상태 알림 수신: BrokerType=${message.type}, status=${message.status}" }\n            }\n            SystemStatus.HEALTHY -> {\n                when (message.prevStatus) {\n                    SystemStatus.CRITICAL -> slackSender.sendReturnHealthySlackMessage(message, message.prevStatus!!)\n                    else -> log.info { "브로커 상태 알림 수신: BrokerType=${message.type}, status=${message.status}" }\n                }\n            }\n        }\n    }',
              },
              type: "text",
              plain_text:
                '@Component\nclass BrokerFailOverConsumer(\n    private val brokerFailoverService: BrokerFailoverService,\n    private val slackSender: SlackSender,\n) {\n    private val log = KotlinLogging.logger { }\n\n    @KafkaListener(\n        topics = ["topicName"],\n        clientIdPrefix = "appName",\n        containerFactory = "falioverContainerFactory"\n    )\n    fun consume(record: ConsumerRecord<String, String>) {\n        val json = record.value()\n        log.info { "system-status-event consume: $json" }\n\n        val message = JsonUtil.fromJson(record.value(), SystemStatusRecord::class.java)\n        \n        when (message.status) {\n            SystemStatus.CRITICAL -> {\n                slackSender.sendCriticalSlackMessage(message)\n                brokerFailoverService.failover()\n            }\n            SystemStatus.CAUTION -> {\n                log.info { "브로커 상태 알림 수신: BrokerType=${message.type}, status=${message.status}" }\n            }\n            SystemStatus.HEALTHY -> {\n                when (message.prevStatus) {\n                    SystemStatus.CRITICAL -> slackSender.sendReturnHealthySlackMessage(message, message.prevStatus!!)\n                    else -> log.info { "브로커 상태 알림 수신: BrokerType=${message.type}, status=${message.status}" }\n                }\n            }\n        }\n    }',
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        type: "code",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-09T06:19:00.000Z",
      },
      {
        id: "dc5d4d3f-6e95-4616-8243-14e07f7985b7",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "위 코드는 이상 감지 시스템에서 발행한 Kafka 이벤트를 구독하고 CRITICAL 상황이면 브로커 failover 시키는 코드에요. 비즈니스 목적에 맞게 CRITICAL 이 아닌 경우에는 별도 대응을 하지 않고 로그 정도만 찍었습니다. ",
              },
              type: "text",
              plain_text:
                "위 코드는 이상 감지 시스템에서 발행한 Kafka 이벤트를 구독하고 CRITICAL 상황이면 브로커 failover 시키는 코드에요. 비즈니스 목적에 맞게 CRITICAL 이 아닌 경우에는 별도 대응을 하지 않고 로그 정도만 찍었습니다. ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-10T07:57:00.000Z",
      },
      {
        id: "784b4c16-371c-46c1-95f4-6a1f4604aaa9",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "두 가지 케이스에 대하여 아래처럼 메신저 알림을 발송하고 있어요. 모든 임직원이 사용하는 메신저를 사용해서 담당자를 멘션해서 즉각 알림을 보낼 수 있어요.",
              },
              type: "text",
              plain_text:
                "두 가지 케이스에 대하여 아래처럼 메신저 알림을 발송하고 있어요. 모든 임직원이 사용하는 메신저를 사용해서 담당자를 멘션해서 즉각 알림을 보낼 수 있어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T00:55:00.000Z",
      },
      {
        id: "d8093968-5b3f-4781-918a-1d11d1ce9079",
        type: "numbered_list_item",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T00:55:00.000Z",
        numbered_list_item: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "브로커 상태가 ",
              },
              type: "text",
              plain_text: "브로커 상태가 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: "CRITICAL",
              },
              type: "text",
              plain_text: "CRITICAL",
              annotations: {
                bold: false,
                code: true,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: " 인 경우",
              },
              type: "text",
              plain_text: " 인 경우",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
      },
      {
        id: "d1a0324e-9705-4494-8823-4c313f384eb1",
        type: "numbered_list_item",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        children: [
          {
            id: "3bd20c50-ada9-4630-b12d-42a1544a31ff",
            type: "image",
            image: {
              file: {
                url: "https://static.toss.im/ipd-tcs/toss_core/live/69762181-3a93-4ca6-bc8b-8fc184ebe684/IMG_9699.jpg",
              },
              type: "file",
              caption: [],
            },
            object: "block",
            parent: {
              type: "block_id",
              block_id: "d1a0324e-9705-4494-8823-4c313f384eb1",
            },
            archived: false,
            in_trash: false,
            created_by: {
              id: "ccffe69e-194c-485a-a525-fc70fae96621",
              object: "user",
            },
            created_time: "2024-07-17T00:16:00.000Z",
            has_children: false,
            last_edited_by: {
              id: "ccffe69e-194c-485a-a525-fc70fae96621",
              object: "user",
            },
            last_edited_time: "2024-07-17T00:16:00.000Z",
          },
        ],
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: true,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-17T00:16:00.000Z",
        numbered_list_item: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "브로커 상태가 ",
              },
              type: "text",
              plain_text: "브로커 상태가 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: "HEALTHY",
              },
              type: "text",
              plain_text: "HEALTHY",
              annotations: {
                bold: false,
                code: true,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: " 이지만 이전 상태가 ",
              },
              type: "text",
              plain_text: " 이지만 이전 상태가 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: "CRITICAL",
              },
              type: "text",
              plain_text: "CRITICAL",
              annotations: {
                bold: false,
                code: true,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: " 인 경우",
              },
              type: "text",
              plain_text: " 인 경우",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
      },
      {
        id: "09ab06e1-785e-4323-b12b-68605cc9201e",
        type: "heading_2",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        heading_2: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "3. 증권 원장에 MongoDB 도입",
              },
              type: "text",
              plain_text: "3. 증권 원장에 MongoDB 도입",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T00:56:00.000Z",
      },
      {
        id: "5c6b77e1-dd3b-46ef-97b9-529fae5ceaac",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "마지막으로 서비스가 성장하면서 데이터 사이즈도 같이 증가를 했어요. 따라서 데이터 관리를 어떻게 할지에 대한 고민거리도 같이 생겼어요. 단순한 조회 API가 500ms 이상 응답이 늦는 빈도가 증가하였고, 그중에 몇몇 API는 1000ms 이상 튀는 요청이 존재했어요.",
              },
              type: "text",
              plain_text:
                "마지막으로 서비스가 성장하면서 데이터 사이즈도 같이 증가를 했어요. 따라서 데이터 관리를 어떻게 할지에 대한 고민거리도 같이 생겼어요. 단순한 조회 API가 500ms 이상 응답이 늦는 빈도가 증가하였고, 그중에 몇몇 API는 1000ms 이상 튀는 요청이 존재했어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:03:00.000Z",
      },
      {
        id: "18b232ca-d059-40fc-a971-324db7434a8f",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "테이블에 데이터가 크지 않았을 때는 문제가 되지 않았지만 데이터 사이즈가 증가하면서 비효율적인 쿼리들이 성능에 병목이 되었습니다.",
              },
              type: "text",
              plain_text:
                "테이블에 데이터가 크지 않았을 때는 문제가 되지 않았지만 데이터 사이즈가 증가하면서 비효율적인 쿼리들이 성능에 병목이 되었습니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-09T06:19:00.000Z",
      },
      {
        id: "f230aa31-427b-4f83-8b69-a64b32dabdfe",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/a0a1420c-3b07-4bc0-aee5-bfe5d3b98126/inner-0711-8-2.png",
          },
          type: "file",
          caption: [],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "6752717c-d213-4236-b503-fdc8634ed4c8",
          object: "user",
        },
        created_time: "2024-07-16T07:21:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "6752717c-d213-4236-b503-fdc8634ed4c8",
          object: "user",
        },
        last_edited_time: "2024-07-16T07:21:00.000Z",
      },
      {
        id: "92a271bb-9c3b-4aef-a124-eaa1c2a9e526",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "따라서 여러 테이블들을 aggregate 한 테이블이 필요했어요. 데이터 저장소로 Oracle, MySQL 과 같은 RDB 혹은 MongoDB 사이에 많은 고민을 했어요. MongoDB를 후보군에 넣은 이유는 Oracle과 같은 RDB는 파티션 키가 없으면 모든 파티션을 검색하기 때문에 파티션 키가 필요하지만, ",
              },
              type: "text",
              plain_text:
                "따라서 여러 테이블들을 aggregate 한 테이블이 필요했어요. 데이터 저장소로 Oracle, MySQL 과 같은 RDB 혹은 MongoDB 사이에 많은 고민을 했어요. MongoDB를 후보군에 넣은 이유는 Oracle과 같은 RDB는 파티션 키가 없으면 모든 파티션을 검색하기 때문에 파티션 키가 필요하지만, ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "MongoDB는 샤드 키가 없어도 어느 정도 준수한 성능 보장이 되기 때문이에요.",
              },
              type: "text",
              plain_text:
                "MongoDB는 샤드 키가 없어도 어느 정도 준수한 성능 보장이 되기 때문이에요.",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:04:00.000Z",
      },
      {
        id: "bf5e0e2b-6c43-406b-aaae-2adbc798295c",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/e495af38-11ee-4b98-923e-762bb3bdf934/Untitled.png",
          },
          type: "file",
          caption: [],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T01:05:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:06:00.000Z",
      },
      {
        id: "eb2b117d-7b20-478a-a8bd-c689f63f09a5",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "MongoDB는 샤드 키가 없이 쿼리를 날려도 모든 노드로 브로드캐스트 요청을 보내 해당 쿼리를 수행하고 mongos(라우터)에서 결과를 조합해서 변환해줘요. ",
              },
              type: "text",
              plain_text:
                "MongoDB는 샤드 키가 없이 쿼리를 날려도 모든 노드로 브로드캐스트 요청을 보내 해당 쿼리를 수행하고 mongos(라우터)에서 결과를 조합해서 변환해줘요. ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "즉, 모든 노드에서 병렬처리를 하기 때문에 적절한 인덱스만 구성이 되면 어느 정도 준수한 성능이 보장이 돼요.",
              },
              type: "text",
              plain_text:
                "즉, 모든 노드에서 병렬처리를 하기 때문에 적절한 인덱스만 구성이 되면 어느 정도 준수한 성능이 보장이 돼요.",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:04:00.000Z",
      },
      {
        id: "14509b76-f8a5-4acd-adab-b0dbe6e26cde",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "파티션 키를 고민한 이유는 데이터가 증가하면서 Oracle DB에 있는 주요 테이블에 파티션 키를 잡을 필요성이 생겼기 때문이에요.",
              },
              type: "text",
              plain_text:
                "파티션 키를 고민한 이유는 데이터가 증가하면서 Oracle DB에 있는 주요 테이블에 파티션 키를 잡을 필요성이 생겼기 때문이에요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:04:00.000Z",
      },
      {
        id: "e2eacc50-e5b3-4bca-9a35-5cf8ac2ba85c",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/c852f551-d76a-408f-a849-d4718af8b331/inner-0711-7.png",
          },
          type: "file",
          caption: [],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "6752717c-d213-4236-b503-fdc8634ed4c8",
          object: "user",
        },
        created_time: "2024-07-16T07:00:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "6752717c-d213-4236-b503-fdc8634ed4c8",
          object: "user",
        },
        last_edited_time: "2024-07-16T07:00:00.000Z",
      },
      {
        id: "17b41146-4b65-4a18-8aa4-e29b73a6627f",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "사내 Oracle DBA(Database Analyst) 로 부터 데이터가 많은 주요 원장 테이블에 파티션 전환을 해야한다는 이야기를 들었어요. 여기서 개발자와 DBA 사이에 파티션 키로 뭐로 잡을지에 대한 의견이 달랐어요.",
              },
              type: "text",
              plain_text:
                "사내 Oracle DBA(Database Analyst) 로 부터 데이터가 많은 주요 원장 테이블에 파티션 전환을 해야한다는 이야기를 들었어요. 여기서 개발자와 DBA 사이에 파티션 키로 뭐로 잡을지에 대한 의견이 달랐어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:00:00.000Z",
      },
      {
        id: "a2bd3cdb-fd90-4700-af3c-803e275aa9a0",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "개발자 입장에서는 증권의 모든 고객 요청은 계좌번호 조건을 찍고 조회하는 특성이 있기 때문에 계좌번호를 파티션 키로 잡고 싶은 니즈가 있었어요. 반면에 DBA 입장에서는 성능 향상도 중요하지만 디스크 저장도 같이 고려한다면 날짜를 파티션 키로 잡는 게 유리하기 때문에 날짜 단위로 파티션 키를 잡는 것을 권장했어요.",
              },
              type: "text",
              plain_text:
                "개발자 입장에서는 증권의 모든 고객 요청은 계좌번호 조건을 찍고 조회하는 특성이 있기 때문에 계좌번호를 파티션 키로 잡고 싶은 니즈가 있었어요. 반면에 DBA 입장에서는 성능 향상도 중요하지만 디스크 저장도 같이 고려한다면 날짜를 파티션 키로 잡는 게 유리하기 때문에 날짜 단위로 파티션 키를 잡는 것을 권장했어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:04:00.000Z",
      },
      {
        id: "5f750102-fee9-4f7d-b013-6156d163f3f3",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "디스크 저장을 고려해야 하는 이유는 다른 DB에 비해 Oracle DB는 상대적으로 확장에 불리하기 때문에 디스크 관리도 같이 고민을 해주면 좋기 때문이에요. 날짜를 파티션 키로 잡게 되면 상대적으로 조회 빈도가 낮은 과거 데이터를 압축하기에 유리하기 때문에 압효율이 높아지고 디스크에 저장하는 데이터 사이즈를 많이 줄일 수 있어요.",
              },
              type: "text",
              plain_text:
                "디스크 저장을 고려해야 하는 이유는 다른 DB에 비해 Oracle DB는 상대적으로 확장에 불리하기 때문에 디스크 관리도 같이 고민을 해주면 좋기 때문이에요. 날짜를 파티션 키로 잡게 되면 상대적으로 조회 빈도가 낮은 과거 데이터를 압축하기에 유리하기 때문에 압효율이 높아지고 디스크에 저장하는 데이터 사이즈를 많이 줄일 수 있어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "36492784-9f02-4bf6-87fa-412a2d99a8cb",
          object: "user",
        },
        last_edited_time: "2024-07-10T06:35:00.000Z",
      },
      {
        id: "a0484a9c-836d-461b-831c-d9fb63ebee4c",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "결국 고민 끝에 팀에서는 MongoDB를 도입하기로 선택했어요.",
              },
              type: "text",
              plain_text:
                "결국 고민 끝에 팀에서는 MongoDB를 도입하기로 선택했어요.",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-12T00:18:00.000Z",
      },
      {
        id: "165fb576-ce2f-4be3-9784-621c570ba45a",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "원천 데이터를 저장하는 Oracle DB는 날짜로 파티션 키를 잡아 장비 운영 효율을 높이고, 비즈니스 목적으로 계좌 단위로 조회를 하는 데이터는 MongoDB로 조회를 ",
              },
              type: "text",
              plain_text:
                "원천 데이터를 저장하는 Oracle DB는 날짜로 파티션 키를 잡아 장비 운영 효율을 높이고, 비즈니스 목적으로 계좌 단위로 조회를 하는 데이터는 MongoDB로 조회를 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content: "함으로",
              },
              type: "text",
              plain_text: "함으로",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "써 상황에 맞게 적절하게 모두 대응을 할 수 있다는 점이 팀 상황에 매우 필요하다고 생각했어요. 그리고 성능도 준수하게 보장이 되고, 샤드 확장도 상대적으로 자유로우니 운영 비용도 크지 않다고 생각했습니다.",
              },
              type: "text",
              plain_text:
                "써 상황에 맞게 적절하게 모두 대응을 할 수 있다는 점이 팀 상황에 매우 필요하다고 생각했어요. 그리고 성능도 준수하게 보장이 되고, 샤드 확장도 상대적으로 자유로우니 운영 비용도 크지 않다고 생각했습니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-12T00:18:00.000Z",
      },
      {
        id: "fb36908e-8a50-495a-a71e-3644a58f294f",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "이제 Oracle DB에서 MongoDB로 어떻게 데이터 마이그레이션했는지 살펴볼게요.",
              },
              type: "text",
              plain_text:
                "이제 Oracle DB에서 MongoDB로 어떻게 데이터 마이그레이션했는지 살펴볼게요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:04:00.000Z",
      },
      {
        id: "750ac737-2c35-48a1-9231-02a49b41f512",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/07e7eff4-8aaf-474e-8b4b-99cd096f641e/Untitled.png",
          },
          type: "file",
          caption: [],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-16T07:44:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-16T07:44:00.000Z",
      },
      {
        id: "63253de1-43aa-408c-a79c-9f56357929ad",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "위 그림은 데이터 마이그레이션 플로우에요. 문제가 된 Oracle 쿼리는 성능이 좋지 않았기 때문에, 빠른 배치 처리를 위해 Hadoop 기반 병렬처리 쿼리 엔진인 Impala에서 원본 데이터 조회를 했어요. Impala는 이미 사내에서 데이터 웨어하우스로 사용 중이기 때문에 별도 환경 구축 없이 빠르게 사용할 수 있었습니다.",
              },
              type: "text",
              plain_text:
                "위 그림은 데이터 마이그레이션 플로우에요. 문제가 된 Oracle 쿼리는 성능이 좋지 않았기 때문에, 빠른 배치 처리를 위해 Hadoop 기반 병렬처리 쿼리 엔진인 Impala에서 원본 데이터 조회를 했어요. Impala는 이미 사내에서 데이터 웨어하우스로 사용 중이기 때문에 별도 환경 구축 없이 빠르게 사용할 수 있었습니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "7b4c866f-dff1-4bd2-b568-ee0f7bd6a14f",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:53:00.000Z",
      },
      {
        id: "005e21cd-1cdd-4a85-b49f-c5a197f05ad2",
        type: "image",
        image: {
          file: {
            url: "https://static.toss.im/ipd-tcs/toss_core/live/77ddd2c8-3ed2-434e-8d39-8f372739921d/Untitled.png",
          },
          type: "file",
          caption: [],
        },
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-16T07:44:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-16T07:44:00.000Z",
      },
      {
        id: "f9f08e86-15a2-45b7-b918-6f1025c50924",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "마이그레이션 이후 발생하는 데이터는 최대한 지연 없이 원본 데이터와 정합을 유지하기 위해 Kafka를 사용해서 실시간으로 데이터를 저장했어요. Kafka 이벤트 또한 이미 발행하고 있었기 때문에 MongoDB 데이터 저장하는 코드만 확장해서 빠르게 개발할 수 있었습니다.",
              },
              type: "text",
              plain_text:
                "마이그레이션 이후 발생하는 데이터는 최대한 지연 없이 원본 데이터와 정합을 유지하기 위해 Kafka를 사용해서 실시간으로 데이터를 저장했어요. Kafka 이벤트 또한 이미 발행하고 있었기 때문에 MongoDB 데이터 저장하는 코드만 확장해서 빠르게 개발할 수 있었습니다.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T00:58:00.000Z",
      },
      {
        id: "c94075b6-272a-420e-bf94-441df76ff1be",
        type: "heading_2",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        heading_2: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "마무리 🙇‍♂️",
              },
              type: "text",
              plain_text: "마무리 🙇‍♂️",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-09T06:19:00.000Z",
      },
      {
        id: "e898dd68-f4af-4b4d-896f-cbfcd9dceca1",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content:
                  "해외주식 서비스가 성장하는 과정 속에 발생한 문제들을 해결한 방법을 소개드렸는데요. 저 당시 팀에서는 언제 브로커 이슈가 발생할지 예상할 수 없기 때문에, 매우 빠르고 효율적으로 개발을 해야 했어요. 글에서 소개한 트래픽 제어, failover, 데이터 관리 등 간단하고 필수적인 기능들이지만 팀에서는 어떤 관점으로 문제를 인식했고 어떻게 지혜롭게 문제를 해결했는지 공유하고 싶었어요.",
              },
              type: "text",
              plain_text:
                "해외주식 서비스가 성장하는 과정 속에 발생한 문제들을 해결한 방법을 소개드렸는데요. 저 당시 팀에서는 언제 브로커 이슈가 발생할지 예상할 수 없기 때문에, 매우 빠르고 효율적으로 개발을 해야 했어요. 글에서 소개한 트래픽 제어, failover, 데이터 관리 등 간단하고 필수적인 기능들이지만 팀에서는 어떤 관점으로 문제를 인식했고 어떻게 지혜롭게 문제를 해결했는지 공유하고 싶었어요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "f62f761a-8d60-4501-b4a9-d688a287d784",
          object: "user",
        },
        last_edited_time: "2024-07-10T07:57:00.000Z",
      },
      {
        id: "f55fef7a-8a2f-4030-89e3-3880a14a73ae",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [
            {
              href: null,
              text: {
                link: null,
                content: "이번 글에서 최종적으로 전달하고 싶은 메시지는 ",
              },
              type: "text",
              plain_text: "이번 글에서 최종적으로 전달하고 싶은 메시지는 ",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  "먼저 문제의 핵심을 파악하고 이를 적정 수준의 엔지니어링을 통해 해결하는 것이 중요하다는 것이에요.",
              },
              type: "text",
              plain_text:
                "먼저 문제의 핵심을 파악하고 이를 적정 수준의 엔지니어링을 통해 해결하는 것이 중요하다는 것이에요.",
              annotations: {
                bold: true,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
            {
              href: null,
              text: {
                link: null,
                content:
                  " 오버엔지니어링 없이 기존에 이미 잘 구현된 제품을 사용하여 문제를 빠르게 해결하고, 절약한 시간을 중요한 비즈니스 개발에 집중할 수 있었고, 이는 저희 팀이 빠르게 성장할 수 있는 비결이라고 생각해요.",
              },
              type: "text",
              plain_text:
                " 오버엔지니어링 없이 기존에 이미 잘 구현된 제품을 사용하여 문제를 빠르게 해결하고, 절약한 시간을 중요한 비즈니스 개발에 집중할 수 있었고, 이는 저희 팀이 빠르게 성장할 수 있는 비결이라고 생각해요.",
              annotations: {
                bold: false,
                code: false,
                color: "default",
                italic: false,
                underline: false,
                strikethrough: false,
              },
            },
          ],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-09T06:19:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T01:05:00.000Z",
      },
      {
        id: "808b59b8-b699-4021-ad53-15a19242ebd7",
        type: "paragraph",
        object: "block",
        parent: {
          type: "page_id",
          page_id: "ccf0e4c0-4399-41d8-92f2-8c5a6b578b24",
        },
        archived: false,
        in_trash: false,
        paragraph: {
          color: "default",
          rich_text: [],
        },
        created_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        created_time: "2024-07-10T00:58:00.000Z",
        has_children: false,
        last_edited_by: {
          id: "ccffe69e-194c-485a-a525-fc70fae96621",
          object: "user",
        },
        last_edited_time: "2024-07-10T00:58:00.000Z",
      },
    ],
    isPublished: true,
  },
};

export default articleDetail;
