
# Green Commit Prototype Architecture

## 문서 목적

이 문서는 Green Commit Open Source Prototype의 전체 구조와 각 구성요소의 역할을 설명합니다.

이 저장소는 실제 Green Commit 운영 서비스와 분리된 교육 및 테스트용 프로토타입입니다. 따라서 이 문서의 구조, 기술 및 데이터 흐름은 실제 운영 서비스와 다를 수 있습니다.

이 문서에서는 외부 기여자가 프로젝트를 이해하는 데 필요한 상위 수준의 구조만 공개합니다.

다음과 같은 내부정보는 포함하지 않습니다.

* 실제 운영 서비스의 인프라 구성
* 실제 운영 환경의 서버 주소
* 실제 데이터베이스 스키마
* 내부 비즈니스 규칙
* 비공개 API 명세
* 인증키 및 환경변수 값
* 실제 서비스 배포 절차
* 실제 서비스의 보안 구조

## 프로젝트 목표

Green Commit Prototype은 오픈소스 기여가 처음인 개발자가 다음 과정을 이해하고 경험할 수 있도록 돕습니다.

1. GitHub 계정으로 로그인합니다.
2. Repository와 Issue를 탐색합니다.
3. 선택한 Issue와 Repository를 학습합니다.
4. Fork와 Clone 과정을 진행합니다.
5. 코드를 수정하고 Commit합니다.
6. Pull Request를 등록합니다.
7. Pull Request 상태를 확인합니다.
8. 기여 이력을 확인합니다.

이 저장소는 위 과정을 실제 운영 환경이 아닌 프로토타입 환경에서 검증하기 위해 사용합니다.

## 전체 구성

```text
┌─────────────────────────────────────────────────────────────┐
│                         사용자                              │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                  Frontend Web Application                   │
│              React · Vite · TypeScript                      │
│                                                             │
│  - 화면 표시                                                │
│  - 사용자 입력                                              │
│  - GitHub 기여 과정 안내                                    │
│  - Repository·Issue·PR 상태 표시                            │
└────────────────────────────┬────────────────────────────────┘
                             │ REST API
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                    Core Backend API                         │
│              Java 21 · Spring Boot · JPA                    │
│                                                             │
│  - 사용자 및 프로필 관리                                   │
│  - GitHub OAuth 연동                                        │
│  - Repository와 Issue 정보 관리                             │
│  - 기여 과정 및 PR 상태 관리                               │
│  - 데이터 저장 및 조회                                     │
└───────────────┬─────────────────────────┬───────────────────┘
                │                         │
                │ AI 요청                 │ 데이터 저장·조회
                ▼                         ▼
┌───────────────────────────┐  ┌──────────────────────────────┐
│       AI Service          │  │       Infrastructure         │
│    Python · FastAPI       │  │                              │
│                           │  │  - PostgreSQL                │
│  - 질문 기반 Coach       │  │  - pgvector                  │
│  - Repository 학습 지원  │  │  - Redis                     │
│  - Issue 이해 지원       │  │  - Neo4j                     │
│  - 응답 품질 검증        │  │  - MinIO                     │
└───────────────────────────┘  └──────────────────────────────┘
                │                         │
                └─────────────┬───────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                         GitHub                              │
│                                                             │
│  - OAuth                                                   │
│  - Repository                                              │
│  - Issue                                                   │
│  - Commit                                                  │
│  - Pull Request                                            │
│  - PR 상태                                                 │
└─────────────────────────────────────────────────────────────┘
```

## 저장소 구조

```text
for_green_commit/
├── app/
│   ├── frontend/
│   ├── backend/
│   ├── ai/
│   └── infra/
├── contribution-lab/
├── docs/
├── .github/
├── README.md
├── ARCHITECTURE.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
└── LICENSE
```

`contribution-lab/`과 `.github/`의 일부 파일은 오픈소스 전환 과정에서 추가됩니다.

## Frontend

### 위치

```text
app/frontend/
```

### 기술

* React
* Vite
* TypeScript

### 역할

Frontend는 사용자가 Green Commit Prototype과 상호작용하는 웹 화면을 제공합니다.

주요 책임은 다음과 같습니다.

* GitHub 로그인 화면 제공
* 사용자 프로필 및 튜토리얼 표시
* Repository와 Issue 목록 표시
* 선택한 Repository와 Issue 정보 표시
* 기여 과정 단계 안내
* Pull Request 정보 입력
* Pull Request 상태 표시
* 기여 이력 표시
* Backend API 호출
* 오류 및 로딩 상태 표시

### 설계 원칙

Frontend에서는 실제 Client Secret이나 서버 전용 인증정보를 보관하지 않습니다.

브라우저에 노출되어서는 안 되는 값은 Backend 또는 로컬 환경변수에서 관리합니다.

## Core Backend

### 위치

```text
app/backend/
```

### 기술

* Java 21
* Spring Boot
* Spring Data JPA
* Spring Batch

### 역할

Backend는 Green Commit Prototype의 주요 데이터와 기능 흐름을 관리합니다.

주요 책임은 다음과 같습니다.

* GitHub OAuth 로그인 처리
* 사용자 정보 관리
* 추가 프로필 정보 관리
* Repository와 Issue 데이터 관리
* 추천 결과 관리
* 기여 과정 진행 상태 관리
* Commit 및 Pull Request 정보 관리
* Pull Request 상태 조회
* 기여 이력 관리
* 데이터베이스 접근
* AI Service 요청 전달

### 설계 원칙

* Frontend에서 직접 데이터베이스에 접근하지 않습니다.
* 사용자 입력값을 신뢰하지 않고 검증합니다.
* Secret과 인증정보는 코드에 직접 작성하지 않습니다.
* 외부 API 오류와 응답 지연을 고려합니다.
* GitHub API 응답과 내부 데이터 모델을 분리합니다.
* 실제 운영 서비스의 내부 API 구조는 이 문서에서 공개하지 않습니다.

## AI Service

### 위치

```text
app/ai/
```

### 기술

* Python 3.12
* FastAPI
* Pydantic

### 역할

AI Service는 Repository와 Issue의 이해 및 학습을 돕는 실험적 기능을 담당합니다.

주요 책임은 다음과 같습니다.

* Repository 관련 질문 처리
* Issue 관련 질문 처리
* 초보자 수준에 맞는 설명 생성
* 기여 과정 학습 지원
* 응답 형식 검증
* Backend와 AI 기능의 경계 분리

### 주의사항

AI가 생성한 답변은 항상 정확하거나 완전하다고 보장하지 않습니다.

다음과 같은 정보는 반드시 원본 Repository와 Issue를 통해 다시 확인해야 합니다.

* 기여 규칙
* 테스트 방법
* 코딩 스타일
* 라이선스
* 보안 정책
* Pull Request 요구사항
* Maintainer의 최신 안내

AI Service에는 실제 개인정보, OAuth Secret, Access Token 또는 비공개 저장소의 내용을 입력하지 않아야 합니다.

## Infrastructure

### 위치

```text
app/infra/
```

### 기술

* Docker Compose
* PostgreSQL
* pgvector
* Redis
* Neo4j
* MinIO

### 역할

Infrastructure 영역은 로컬 프로토타입 실행에 필요한 저장소 및 지원 서비스를 구성합니다.

각 구성요소의 일반적인 역할은 다음과 같습니다.

| 구성요소       | 역할                     |
| -------------- | ------------------------ |
| PostgreSQL     | 주요 관계형 데이터 저장  |
| pgvector       | 벡터 형태 데이터 실험    |
| Redis          | 캐시 및 임시 상태 관리   |
| Neo4j          | 그래프 형태 데이터 실험  |
| MinIO          | 로컬 객체 스토리지 실험  |
| Docker Compose | 로컬 인프라 실행 및 연결 |

이 구성은 프로토타입을 위한 로컬 개발 구조이며 실제 Green Commit 운영 인프라를 나타내지 않습니다.

## GitHub 연동

Green Commit Prototype은 GitHub와 연결해 오픈소스 기여 과정을 실험합니다.

주요 연동 대상은 다음과 같습니다.

* GitHub OAuth
* 사용자 프로필
* Repository
* Issue
* Commit
* Pull Request
* Pull Request 상태

### 인증정보 관리

GitHub OAuth를 사용하려면 개발자가 각자의 GitHub OAuth App을 만들고 로컬 환경변수에 값을 입력해야 합니다.

다음 값은 절대 저장소에 Commit하면 안 됩니다.

```text
GITHUB_CLIENT_SECRET
GitHub Personal Access Token
Access Token
Refresh Token
실제 API Key
실제 비밀번호
```

환경변수 예제 파일에는 변수 이름만 제공하고 실제 값은 넣지 않습니다.

## 주요 데이터 흐름

### GitHub 로그인

```text
사용자
→ Frontend에서 로그인 시작
→ Backend로 로그인 요청
→ GitHub OAuth 인증
→ Backend에서 사용자 확인
→ Frontend에 로그인 결과 전달
```

### Repository 및 Issue 탐색

```text
사용자
→ Frontend에서 Repository 또는 Issue 요청
→ Backend에서 요청 검증
→ GitHub 또는 내부 데이터 조회
→ 조회 결과 정리
→ Frontend에 결과 전달
```

### AI 학습 지원

```text
사용자 질문
→ Frontend
→ Backend
→ AI Service
→ 응답 검증
→ Backend
→ Frontend
→ 사용자에게 표시
```

### Pull Request 등록 및 상태 확인

```text
사용자가 PR 정보 등록
→ Frontend
→ Backend
→ GitHub에서 PR 확인
→ PR 상태 저장
→ Frontend에 상태 표시
```

Pull Request 상태는 다음과 같이 구분할 수 있습니다.

```text
OPEN
MERGED
CLOSED
DRAFT
```

`MERGED`와 `CLOSED`는 모두 GitHub API에서 닫힌 상태와 관련될 수 있으므로 Merge 여부를 별도로 확인해야 합니다.

## Pull Request 테스트 구조

이 저장소는 Green Commit의 PR 상태 추적 기능을 검증하는 테스트 저장소로도 사용합니다.

테스트 시나리오에는 다음 상태가 포함될 수 있습니다.

* PR 생성 후 Open 유지
* PR Merge
* PR Close
* PR Close 후 Reopen
* Draft PR 생성
* Draft에서 Ready for review로 전환
* 리뷰 후 추가 Commit
* 수정 요청 후 재검토

테스트 Issue에는 예상되는 PR 처리 방식을 사전에 안내합니다.

외부 기여자의 PR을 동의 없이 테스트 목적으로 사용하지 않습니다.

## Contribution Lab

### 위치

```text
contribution-lab/
```

Contribution Lab은 오픈소스 기여가 처음인 개발자를 위한 독립적인 연습 공간입니다.

다음과 같은 작업을 제공합니다.

* 기여자 목록에 이름 추가
* 문서 오타 수정
* 용어 설명 추가
* 간단한 JavaScript 함수 구현
* 간단한 Python 함수 구현
* 단위 테스트 추가
* PR 생성 및 리뷰 반영 연습

초보자용 Issue에서는 가능한 한 다음 정보를 명확히 제공합니다.

* 수정할 파일
* 수정 범위
* 완료 조건
* 예상 결과
* 테스트 방법
* PR 처리 시나리오

## 환경변수

환경별 설정은 코드에 직접 작성하지 않고 환경변수로 관리합니다.

예제:

```text
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
POSTGRES_DSN=
REDIS_URL=
NEO4J_URI=
```

`.env.example`에는 변수 이름과 안전한 로컬 기본값만 작성합니다.

실제 Secret이 포함된 `.env` 파일은 Git에 Commit하지 않습니다.

## 보안 경계

이 프로토타입에서는 다음 경계를 유지합니다.

### Browser와 Backend

브라우저에는 서버 전용 Secret을 전달하지 않습니다.

### Backend와 GitHub

Backend는 GitHub API 요청에 필요한 인증정보를 안전한 환경변수에서 읽습니다.

### Backend와 AI Service

AI 요청에는 기능 수행에 필요한 최소한의 정보만 전달합니다.

### 코드와 환경설정

코드는 설정값의 이름만 알고 실제 값은 실행 환경에서 제공합니다.

### 공개 프로토타입과 실제 서비스

이 저장소의 코드, 데이터, 인프라 및 문서는 실제 Green Commit 운영 서비스와 공유되지 않는 것을 원칙으로 합니다.

## 오픈소스 기여 범위

외부 기여자는 다음 영역에 우선 참여할 수 있습니다.

* `contribution-lab/`
* `README.md`
* `CONTRIBUTING.md`
* `CODE_OF_CONDUCT.md`
* `SECURITY.md`
* `ARCHITECTURE.md`
* `docs/`의 공개 가이드
* `good first issue`로 지정된 코드

다음 변경은 먼저 Issue에서 논의해 주세요.

* 전체 아키텍처 변경
* 인증 방식 변경
* 데이터베이스 교체
* 대규모 의존성 추가
* 공개 API 구조 변경
* Docker 환경의 대규모 변경
* 보안 정책 변경
* 실제 서비스와의 통합 제안

## 비목표

이 공개 프로토타입은 다음을 목표로 하지 않습니다.

* 실제 운영 서비스 코드 공개
* 실제 사용자 데이터 처리
* 실제 운영 인프라 공개
* 실제 서비스의 SLA 제공
* 운영 수준의 보안 또는 성능 보장
* 실제 서비스의 상세 로드맵 공개
* 실제 운영 환경과 동일한 동작 보장

## 관련 문서

* 프로젝트 소개: [`README.md`](README.md)
* 기여 방법: [`CONTRIBUTING.md`](CONTRIBUTING.md)
* 참여자 행동 규칙: [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)
* 보안 정책: [`SECURITY.md`](SECURITY.md)
* 라이선스: [`LICENSE`](LICENSE)

## 문서 변경

아키텍처를 변경하는 Pull Request에는 가능한 한 다음 내용을 포함해 주세요.

* 변경 목적
* 영향을 받는 구성요소
* 데이터 흐름 변화
* 보안 영향
* 테스트 방법
* 기존 구조와의 호환성
* 문서 수정 여부

이 문서는 실제 코드와 공개 범위가 변경될 때 함께 갱신해야 합니다.
