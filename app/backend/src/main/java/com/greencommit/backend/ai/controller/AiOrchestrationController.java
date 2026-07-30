package com.greencommit.backend.ai.controller;

import com.greencommit.backend.ai.dto.OrchestrationRequest;
import com.greencommit.backend.ai.dto.OrchestrationResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * F021(현재 미연동): 표37 API — POST /ai/orchestrations. STUB ONLY — app/ai FastAPI 서비스를
 * 호출하지 않고 고정 placeholder만 반환한다.
 * TODO: Orchestrator LLM의 Tool/Model Routing을 app/ai와 연결.
 */
@RestController
public class AiOrchestrationController {

    @PostMapping("/ai/orchestrations")
    public ResponseEntity<OrchestrationResponse> orchestrate(@RequestBody(required = false) OrchestrationRequest request) {
        return ResponseEntity.ok(new OrchestrationResponse(
                "NOT_IMPLEMENTED",
                "고정 Workflow 준비 중",
                "AI Orchestrator 연동은 현재 공개 프로토타입에서는 제공되지 않습니다."));
    }
}
