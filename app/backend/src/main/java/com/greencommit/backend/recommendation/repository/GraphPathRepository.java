package com.greencommit.backend.recommendation.repository;

import com.greencommit.backend.recommendation.entity.GraphPath;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

/** F020(현재 미연동) — 어떤 서비스도 아직 이 Repository를 주입받지 않는다. */
public interface GraphPathRepository extends JpaRepository<GraphPath, UUID> {
}
