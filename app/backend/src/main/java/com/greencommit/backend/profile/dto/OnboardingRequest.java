package com.greencommit.backend.profile.dto;

import com.greencommit.backend.profile.entity.ExperienceLevel;
import com.greencommit.backend.profile.entity.PrimaryIde;
import jakarta.validation.constraints.NotNull;
import java.util.UUID;

/**
 * PUT /users/me/onboarding 요청. 인증 컨텍스트를 직접 사용하지 않아 userId를 명시적으로 받는다.
 */
public record OnboardingRequest(
        @NotNull UUID userId,
        @NotNull PrimaryIde primaryIde,
        @NotNull ExperienceLevel experienceLevel,
        boolean firstTimeContributor,
        String interestAreas,
        String contributionTypes,
        Integer weeklyHours,
        Integer gitPrConfidence,
        String userAdjustedSkills) {
}
