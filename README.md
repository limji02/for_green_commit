# Green Commit Open Source Prototype

> 이 저장소는 실제 Green Commit 운영 서비스와 분리된
> 교육 및 테스트 목적의 오픈소스 프로토타입입니다.

Green Commit은 오픈소스 기여가 처음인 개발자에게 적절한 Repository와 Issue를 안내하고, Fork부터 Pull Request까지의 기여 과정을 학습할 수 있도록 돕는 프로젝트입니다.

이 저장소는 초보 개발자의 오픈소스 기여 연습과 Green Commit 팀의 GitHub 연동·PR 상태 추적 기능 검증을 위해 공개합니다.

## 실제 서비스와의 관계

이 저장소는 실제 Green Commit 운영 서비스의 소스 코드가 아닙니다.

실제 서비스는 별도의 저장소와 인프라에서 개발되며, 이 저장소의 코드·구조·기능·데이터는 실제 서비스와 다를 수 있습니다.

이 저장소는 다음 목적으로만 운영됩니다.

* 오픈소스 기여 학습
* 초보 개발자의 첫 Pull Request 연습
* Green Commit 아이디어와 사용자 흐름 검증
* GitHub OAuth 및 Repository·Issue 연동 테스트
* Pull Request의 Open·Merged·Closed 상태 추적 테스트
* 외부 기여자가 참여할 수 있는 공개 개발 실험

## 주요 기능

프로토타입에서는 다음 흐름을 실험할 수 있습니다.

1. GitHub OAuth 로그인
2. 추가 프로필 및 튜토리얼
3. Repository와 Issue 추천 및 선택
4. Fork·Clone·Repository 분석
5. Issue 학습과 질문 기반 Coach
6. Commit 및 Pull Request 등록
7. Pull Request 상태 확인
8. 개인 기여 이력 확인

일부 기능은 프로토타입 또는 실험 단계이며, 실제 운영 서비스와 동일한 동작을 보장하지 않습니다.

## 저장소 구조

```text
app/
├── frontend/   # React + Vite + TypeScript
├── backend/    # Java 21 + Spring Boot + JPA
├── ai/         # Python 3.12 + FastAPI
└── infra/      # Docker Compose 및 로컬 인프라

contribution-lab/
└── 초보 개발자를 위한 오픈소스 기여 연습 공간
```

`contribution-lab/`은 문서 수정, 기여자 등록, 간단한 함수 구현과 테스트 같은 입문용 Issue를 제공하는 기여 연습 공간입니다.

프로젝트 구성과 데이터 흐름은 [`ARCHITECTURE.md`](ARCHITECTURE.md)를 참고하세요.

## 기술 스택

### Frontend

* React
* Vite
* TypeScript

### Backend

* Java 21
* Spring Boot
* Spring Data JPA
* Spring Batch

### AI Service

* Python 3.12
* FastAPI
* Pydantic

### Infrastructure

* PostgreSQL
* pgvector
* Redis
* Neo4j
* MinIO
* Docker Compose

## 시작하기

### 1. 필요한 프로그램

로컬 실행을 위해 다음 프로그램이 필요합니다.

* Git
* Docker Desktop
* Node.js
* Java 21 JDK
* Python 3.12

초보자를 위한 자세한 설치 안내는 다음 문서를 참고하세요.

* [`docs/setup-guide.txt`](docs/setup-guide.txt)
* [`docs/github-oauth-app-guide.txt`](docs/github-oauth-app-guide.txt)

### 2. 저장소 Clone

```bash
git clone https://github.com/userofthefreedom/for_green_commit.git
cd for_green_commit
```

### 3. 환경변수 설정

각 애플리케이션 폴더의 `.env.example` 파일을 참고해 로컬 `.env` 파일을 만드세요.

실제 Client Secret, API Key, 비밀번호 등의 값은 절대 Git에 커밋하지 마세요.

### 4. 인프라 실행

```bash
docker compose -f app/infra/docker-compose.yml up -d postgres redis neo4j minio
```

### 5. Backend 실행

Git Bash 또는 macOS·Linux:

```bash
cd app/backend
./gradlew bootRun
```

Windows 명령 프롬프트 또는 PowerShell:

```powershell
cd app/backend
.\gradlew.bat bootRun
```

### 6. AI Service 실행

Windows:

```bash
cd app/ai
py -3.12 -m venv .venv
source .venv/Scripts/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

macOS·Linux:

```bash
cd app/ai
python3.12 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 7. Frontend 실행

```bash
cd app/frontend
npm install
npm run dev
```

## 오픈소스 기여

오픈소스 기여가 처음인 개발자도 참여할 수 있습니다.

기본적인 기여 과정은 다음과 같습니다.

1. 참여할 Issue를 선택합니다.
2. 이 저장소를 개인 계정으로 Fork합니다.
3. 작업용 Branch를 만듭니다.
4. Issue에 지정된 내용을 수정합니다.
5. 변경 내용을 Commit하고 Push합니다.
6. 이 저장소를 대상으로 Pull Request를 생성합니다.

자세한 규칙은 [`CONTRIBUTING.md`](CONTRIBUTING.md)를 참고하세요.

## 테스트용 Pull Request 정책

일부 Issue와 Pull Request는 Green Commit의 상태 추적 기능 검증을 위해 만들어집니다.

테스트용 Pull Request는 사전에 안내된 시나리오에 따라 다음과 같이 처리될 수 있습니다.

* 정상적으로 Merge
* 수정 요청 후 Merge
* Merge하지 않고 Close
* 일정 기간 Open 상태 유지
* Close 후 Reopen
* Draft 상태 유지 후 Ready for review로 변경

테스트 시나리오가 적용되는 Issue에는 목적과 예상 처리 방식을 명확하게 표시합니다.

코드의 품질과 관계없이 테스트 목적으로 Close될 수 있는 Pull Request에는 Issue와 PR 본문에 해당 사실을 사전에 안내합니다.

## 보안

실제 API Key, OAuth Client Secret, Access Token, 개인 비밀번호 또는 운영 환경정보를 Issue나 Pull Request에 올리지 마세요.

보안 문제가 발견되면 공개 Issue 대신 [`SECURITY.md`](SECURITY.md)에 안내된 방법으로 신고해 주세요.

## 프로젝트 상태

이 프로젝트는 교육과 기능 검증을 위한 오픈소스 프로토타입입니다.

완성된 상용 서비스가 아니며 다음 사항이 변경될 수 있습니다.

* 기능
* 화면
* API
* 데이터 구조
* 실행 방법
* 지원 범위

## 기여자 행동 규칙

모든 참여자는 서로를 존중하고 초보 기여자가 안전하게 질문할 수 있는 환경을 만드는 데 동의해야 합니다.

자세한 내용은 [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)를 참고하세요.

## 라이선스

이 프로젝트는 Apache License 2.0에 따라 공개됩니다.

자세한 내용은 [`LICENSE`](LICENSE) 파일을 참고하세요.
