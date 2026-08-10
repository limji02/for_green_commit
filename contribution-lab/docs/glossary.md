# 오픈소스 기여 용어집

이 문서는 오픈소스 기여가 처음인 개발자를 위한 기본 용어 설명입니다.

## Repository

프로젝트의 코드, 문서, 설정 파일과 변경 이력이 저장되는 공간입니다. 보통 줄여서 `Repo`라고 부릅니다.

## Fork

다른 사람의 Repository를 자신의 GitHub 계정으로 복사하는 기능입니다.

원본 프로젝트에 직접 쓰기 권한이 없어도 Fork한 저장소에서는 자유롭게 Branch를 만들고 코드를 수정할 수 있습니다.

## Clone

GitHub에 있는 Repository를 자신의 컴퓨터로 내려받는 작업입니다.

## Branch

기본 코드에 바로 영향을 주지 않고 독립적으로 작업하기 위한 분리된 작업 공간입니다.

## Commit

파일의 변경 내용을 하나의 단위로 기록하는 작업입니다.

좋은 Commit 메시지는 무엇을 왜 변경했는지 이해할 수 있게 작성합니다.

## Issue

버그, 기능 제안, 문서 수정 또는 작업 항목을 기록하고 논의하는 공간입니다.

기여를 시작하기 전에 Issue의 작업 범위와 완료 조건을 확인해야 합니다.

## Pull Request

자신의 Branch에서 만든 변경 내용을 원본 Repository에 반영해 달라고 요청하는 기능입니다.

Pull Request는 보통 `PR`이라고 부릅니다.

## Review

Maintainer나 다른 기여자가 Pull Request의 코드와 문서를 검토하고 의견을 남기는 과정입니다.

## Merge

Pull Request의 변경 내용을 대상 Branch에 합치는 작업입니다.

## Squash Merge

Pull Request에 담긴 여러 개의 Commit을 하나의 Commit으로 합쳐서 대상 Branch에 반영하는 Merge 방식입니다.

작업 중간에 남긴 자잘한 Commit들이 하나로 정리되기 때문에 대상 Branch의 커밋 이력을 깔끔하게 유지할 수 있습니다.

## Close

Issue나 Pull Request를 완료하거나 중단된 상태로 닫는 작업입니다.

Pull Request가 Close됐다고 해서 항상 Merge된 것은 아닙니다.

## Draft Pull Request

아직 작업이 완료되지 않았으며 정식 리뷰를 요청하기 전이라는 사실을 표시하는 Pull Request입니다.

## Maintainer

오픈소스 프로젝트를 관리하고 Issue, Pull Request, Release 등을 검토하는 사람입니다.

## Upstream

Fork의 기준이 된 원본 Repository를 가리키는 이름으로 자주 사용합니다.

## Origin

로컬 Repository가 기본적으로 연결된 원격 Repository를 가리키는 이름입니다. Fork 방식에서는 보통 자신이 Fork한 Repository가 `origin`입니다.

## Good First Issue

오픈소스 기여가 처음인 개발자도 비교적 쉽게 시작할 수 있도록 준비한 Issue입니다.

## Rebase

브랜치의 기준점을 다른 커밋 위로 옮겨서 커밋 이력을 한 줄로 깔끔하게 정리하는 작업

## Conflict

서로 다른 Branch에서 같은 파일의 같은 부분을 다르게 수정한 뒤 합치려고 할 때, Git이 어느 쪽 내용을 남겨야 하는지 판단할 수 없어서 발생하는 충돌 상태입니다.

이때 Git은 Merge를 자동으로 완료하지 못하고 충돌이 생긴 위치를 파일에 표시하므로, 기여자가 직접 남길 내용을 정리한 뒤 다시 Commit해야 합니다.
