package com.dongju.portfolio.service.portfolio.personalProject.chat.impl;

import com.dongju.portfolio.domain.dto.portfolio.personalProject.chat.ChatRoomDto;
import com.dongju.portfolio.domain.entity.portfolio.personalProject.chat.ChatRoom;
import com.dongju.portfolio.domain.repositories.portfolio.personalProject.chat.ChatRoomRepository;
import com.dongju.portfolio.service.portfolio.personalProject.chat.ChatRoomService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service("jpaChatRoomServiceImpl")
@Transactional
@RequiredArgsConstructor
@Slf4j
public class ChatRoomServiceImpl implements ChatRoomService {

    private final ChatRoomRepository chatRoomRepository;
    private final ModelMapper modelMapper;

    @Override
    public List<ChatRoomDto> list() {
        List<ChatRoom> chatRoomList = chatRoomRepository.findAll(Sort.by("uid"));

        List<ChatRoomDto> chatRoomDtoList = new ArrayList<>();
        chatRoomList.forEach( chatRoom ->
                chatRoomDtoList.add(modelMapper.map(chatRoom, ChatRoomDto.class)));

        return chatRoomDtoList;
    }

    @Override
    public ChatRoomDto findByUid(Long uid) {
        ChatRoom chatRoom = chatRoomRepository.findById(uid).orElse(new ChatRoom());

        return modelMapper.map(chatRoom, ChatRoomDto.class);
    }

    @Override
    public Long count() {
        return chatRoomRepository.count();
    }

    @Override
    public void save(ChatRoomDto chatRoomDto) {
        if(chatRoomRepository.count() > 5) {
            log.info("방 생성 5개 제한으로 방 생성에 실패했습니다.");
            return;
        }

        ChatRoom chatRoom = modelMapper.map(chatRoomDto, ChatRoom.class);

        chatRoomRepository.save(chatRoom);
    }

    @Override
    public void deleteByUid(Long uid) {
        chatRoomRepository.deleteById(uid);
    }
}
