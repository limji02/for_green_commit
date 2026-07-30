package com.greencommit.backend.identity.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

/**
 * POST /auth/github/callback 요청 스텁 payload.
 * 실제 GitHub OAuth2 Authorization Code 교환은 Spring Security OAuth2 Client가 처리한다.
 * 현재 수동 콜백 경로는 이 payload를 그대로 받아 User/GitHubAccount/OAuthCredential을 upsert한다.
 */
public record GitHubCallbackRequest(
        @NotNull Long githubId,
        @NotBlank String githubLogin,
        String email,
        String displayName,
        String avatarUrl,
        Integer publicReposCount,
        Integer followers) {
}
