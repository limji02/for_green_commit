# Green Commit 기여 가이드

Green Commit Open Source Prototype에 관심을 갖고 기여해 주셔서 감사합니다.

이 저장소는 실제 Green Commit 운영 서비스와 분리된 교육 및 테스트 목적의 오픈소스 프로젝트입니다. 오픈소스 기여가 처음인 개발자도 안전하게 Issue와 Pull Request 과정을 경험할 수 있도록 운영합니다.

## 기여하기 전에 확인해 주세요

기여를 시작하기 전에 다음 문서를 확인해 주세요.

* 프로젝트 소개와 실행 방법: [`README.md`](README.md)
* 참여자 행동 규칙: [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)
* 보안 문제 신고 방법: [`SECURITY.md`](SECURITY.md)
* 프로젝트 라이선스: [`LICENSE`](LICENSE)

## 기여할 수 있는 작업

다음과 같은 방식으로 기여할 수 있습니다.

* 문서의 오타나 잘못된 설명 수정
* 초보자를 위한 용어 설명 추가
* 설치 및 실행 가이드 개선
* 간단한 예제 코드 작성
* 테스트 코드 추가
* 버그 수정
* 접근성과 사용자 경험 개선
* 테스트용 Pull Request 시나리오 참여

오픈소스 기여가 처음이라면 다음 라벨이 붙은 Issue부터 시작하는 것을 권장합니다.

* `good first issue`
* `beginner`
* `documentation`
* `help wanted`

Issue에 지정되지 않은 대규모 기능이나 구조 변경은 먼저 Issue를 생성해 관리자와 논의해 주세요.

## 기여 절차

### 1. Issue 선택

작업하고 싶은 Issue를 선택합니다.

Issue 본문에서 다음 내용을 확인해 주세요.

* 작업 목적
* 수정해야 할 파일
* 완료 조건
* 예상 난이도
* 테스트 방법
* Pull Request 처리 시나리오

작업을 시작하기 전에 Issue에 참여 의사를 댓글로 남겨 주세요.

예시:

```text
이 Issue에 처음 기여해 보고 싶습니다. 제가 작업해도 될까요?
```

관리자가 작업 가능 여부를 확인하면 기여를 시작합니다.

### 2. 저장소 Fork

GitHub 저장소 화면 오른쪽 위의 `Fork` 버튼을 눌러 본인의 GitHub 계정으로 저장소를 복사합니다.

### 3. Fork한 저장소 Clone

본인의 GitHub 사용자명으로 주소를 변경해 실행합니다.

```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/for_green_commit.git
cd for_green_commit
```

### 4. 원본 저장소 연결

원본 Green Commit 저장소를 `upstream`으로 등록합니다.

```bash
git remote add upstream https://github.com/userofthefreedom/for_green_commit.git
```

연결 상태를 확인합니다.

```bash
git remote -v
```

다음 두 종류의 원격 저장소가 보여야 합니다.

```text
origin    본인이 Fork한 저장소
upstream  Green Commit 원본 저장소
```

### 5. 기본 브랜치 최신화

작업을 시작하기 전에 기본 브랜치를 최신 상태로 맞춥니다.

```bash
git switch master
git fetch upstream
git pull --ff-only upstream master
```

Fork 저장소의 `master`에도 반영하려면 다음을 실행합니다.

```bash
git push origin master
```

### 6. 작업 브랜치 생성

`master` 브랜치에서 직접 작업하지 마세요.

Issue 번호와 작업 종류를 포함한 새로운 브랜치를 생성합니다.

```bash
git switch -c <작업종류>/<Issue번호>-<간단한설명>
```

예시:

```bash
git switch -c docs/12-fix-readme-typo
git switch -c feat/15-add-string-function
git switch -c fix/21-fix-validation-error
git switch -c test/27-add-unit-test
```

권장 작업 종류는 다음과 같습니다.

| 종류         | 사용 목적             |
| ---------- | ----------------- |
| `docs`     | 문서 수정             |
| `feat`     | 기능 추가             |
| `fix`      | 버그 수정             |
| `test`     | 테스트 추가 또는 수정      |
| `refactor` | 동작 변경 없는 코드 구조 개선 |
| `chore`    | 설정 및 기타 유지보수      |

### 7. 지정된 범위 수정

Issue에 안내된 파일과 범위만 수정해 주세요.

초보자용 Issue에서는 특히 다음 사항을 확인해 주세요.

* 관련 없는 파일을 함께 수정하지 않았는지
* 자동 포매팅으로 파일 전체가 변경되지 않았는지
* 실제 API Key나 비밀번호가 포함되지 않았는지
* 빌드 결과물이나 개인 설정 파일이 포함되지 않았는지

다음 파일은 절대 Commit하지 마세요.

```text
.env
.env.*.local
API Key가 포함된 파일
OAuth Client Secret이 포함된 파일
개인 Access Token이 포함된 파일
IDE 개인 설정
로그 파일
데이터베이스 로컬 데이터
```

### 8. 변경 내용 확인

수정한 파일을 확인합니다.

```bash
git status
```

변경 내용을 확인합니다.

```bash
git diff
```

원하지 않은 파일이 변경됐다면 Commit 전에 되돌려 주세요.

### 9. 테스트 실행

수정한 영역에 맞는 테스트를 실행해 주세요.

Frontend:

```bash
cd app/frontend
npm install
npm run build
```

Frontend 테스트 명령이 프로젝트에 설정돼 있다면 함께 실행합니다.

```bash
npm test
```

Backend:

```bash
cd app/backend
./gradlew test
```

Windows PowerShell 또는 명령 프롬프트:

```powershell
cd app/backend
.\gradlew.bat test
```

AI Service:

```bash
cd app/ai
python -m pytest
```

문서만 수정했다면 다음을 확인해 주세요.

* 링크 경로가 올바른지
* Markdown 코드 블록이 닫혀 있는지
* 삭제된 파일을 참조하지 않는지
* 명령어를 복사해 실행할 수 있는지

Issue에 별도의 테스트 방법이 적혀 있다면 해당 안내를 우선합니다.

### 10. 변경 파일 Staging

모든 파일을 한꺼번에 추가하기보다 수정한 파일을 직접 지정하는 것을 권장합니다.

```bash
git add <수정한 파일>
```

예시:

```bash
git add README.md
git add contribution-lab/contributors.json
```

Staging된 내용을 확인합니다.

```bash
git diff --cached
```

### 11. Commit 작성

Commit 메시지는 변경 목적을 알 수 있도록 작성합니다.

형식:

```text
작업종류: 변경 내용
```

예시:

```bash
git commit -m "docs: fix typo in contribution guide"
git commit -m "feat: add beginner string utility"
git commit -m "test: add validation unit test"
```

하나의 Commit에는 가능한 한 하나의 목적만 포함해 주세요.

### 12. 개인 Fork에 Push

```bash
git push -u origin <작업 브랜치 이름>
```

예시:

```bash
git push -u origin docs/12-fix-readme-typo
```

### 13. Pull Request 생성

GitHub에서 본인의 Fork 저장소를 열고 `Compare & pull request` 버튼을 선택합니다.

Pull Request 대상이 다음과 같은지 확인해 주세요.

```text
base repository: userofthefreedom/for_green_commit
base branch: master

head repository: 본인의 Fork 저장소
compare branch: 본인이 만든 작업 브랜치
```

Pull Request 본문에는 다음 내용을 작성해 주세요.

* 관련 Issue 번호
* 변경한 내용
* 변경 이유
* 테스트 방법과 결과
* 확인이 필요한 사항

관련 Issue를 자동으로 연결하려면 다음과 같이 작성할 수 있습니다.

```text
Closes #12
```

## Pull Request 처리 방식

일반적인 Pull Request는 코드와 문서를 검토한 뒤 다음 중 하나로 처리됩니다.

* 승인 후 Merge
* 수정 요청
* 추가 설명 요청
* 범위 조정을 위한 Close

일부 Pull Request는 Green Commit의 PR 상태 추적 기능을 검증하기 위한 테스트 시나리오로 사용됩니다.

테스트용 Issue에는 다음과 같은 처리 방식이 미리 표시됩니다.

* `test:merge`: 검토 후 Merge
* `test:close`: Merge하지 않고 Close
* `test:keep-open`: 일정 기간 Open 상태 유지
* `test:reopen`: Close 후 다시 Open
* `test:draft`: Draft 상태 확인

`test:close`처럼 테스트 목적상 Close되는 Pull Request는 기여 내용이 잘못됐다는 의미가 아닙니다.

테스트 시나리오에 따라 처리되는 경우 Issue와 Pull Request 본문에서 목적을 사전에 안내합니다.

## 리뷰 의견 반영

관리자가 수정 요청을 남기면 기존 Pull Request를 닫고 새로 만들지 않아도 됩니다.

같은 작업 브랜치에서 코드를 수정한 뒤 Commit하고 Push하세요.

```bash
git add <수정한 파일>
git commit -m "fix: address pull request review"
git push
```

기존 Pull Request에 변경 내용이 자동으로 반영됩니다.

리뷰 의견에 답변할 때는 다음 내용을 명확히 알려 주세요.

* 어떤 부분을 수정했는지
* 수정하지 않았다면 그 이유가 무엇인지
* 추가 확인이 필요한 내용이 있는지

## Pull Request가 Merge된 후

원본 저장소의 최신 내용을 가져옵니다.

```bash
git switch master
git fetch upstream
git pull --ff-only upstream master
git push origin master
```

작업이 끝난 로컬 브랜치를 삭제할 수 있습니다.

```bash
git branch -d <작업 브랜치 이름>
```

원격 Fork의 브랜치도 삭제하려면:

```bash
git push origin --delete <작업 브랜치 이름>
```

## 보안 및 개인정보

다음 정보는 Issue, Pull Request, Commit 또는 문서에 포함하지 마세요.

* GitHub Personal Access Token
* GitHub OAuth Client Secret
* API Key
* 실제 비밀번호
* 실제 운영 서버 주소
* 개인정보
* 비공개 저장소의 코드나 문서
* 회사 또는 조직의 내부정보

실수로 Secret을 Commit했다면 단순히 파일을 삭제하는 것으로 끝내지 말고, 해당 Secret을 즉시 폐기한 뒤 관리자에게 알려 주세요.

보안 취약점은 공개 Issue로 등록하지 말고 [`SECURITY.md`](SECURITY.md)의 안내를 따라 주세요.

## 기여 라이선스

이 저장소에 Pull Request를 제출하면 본인이 제출할 권리를 가진 코드와 문서만 포함했음을 확인하는 것입니다.

제출된 기여 내용은 이 프로젝트의 [`Apache License 2.0`](LICENSE)에 따라 제공됩니다.

다른 프로젝트의 코드, 문서, 이미지 또는 기타 저작물을 복사해 제출하지 마세요. 외부 자료가 필요한 경우 해당 자료의 라이선스와 출처를 Pull Request에 명시해 주세요.

## 질문과 도움 요청

오픈소스 기여가 처음이라 진행 방법을 모르더라도 괜찮습니다.

관련 Issue에 다음 내용을 포함해 질문해 주세요.

* 진행한 단계
* 실행한 명령어
* 발생한 오류 메시지
* 사용 중인 운영체제
* 예상했던 결과
* 실제로 발생한 결과

API Key, 비밀번호, Token 등의 민감정보는 오류 화면이나 로그에서 반드시 제거한 뒤 공유해 주세요.

## 기여자에게 드리는 약속

Green Commit은 초보 기여자가 질문하고 실수하면서 배울 수 있는 환경을 지향합니다.

관리자는 가능한 한 다음 원칙에 따라 기여를 검토합니다.

* 변경 요청의 이유를 설명합니다.
* 초보자가 이해할 수 있는 표현을 사용합니다.
* 작업 범위와 완료 조건을 명확하게 안내합니다.
* 테스트 목적의 Merge·Close 여부를 사전에 알립니다.
* 기여자의 경험과 배경을 존중합니다.

첫 기여를 환영합니다!
