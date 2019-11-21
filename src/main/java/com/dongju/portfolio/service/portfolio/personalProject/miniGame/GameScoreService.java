package com.dongju.portfolio.service.portfolio.personalProject.miniGame;

import com.dongju.portfolio.domain.dto.portfolio.personalProject.miniGame.GameScoreDto;

import java.util.List;


public interface GameScoreService {
    List<GameScoreDto> list();
    GameScoreDto findByUid(Long uid);
    void save(GameScoreDto chatRoomDto);
    void deleteByUid(Long uid);
}
