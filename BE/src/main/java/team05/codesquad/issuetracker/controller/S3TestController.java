package team05.codesquad.issuetracker.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import team05.codesquad.issuetracker.config.S3Uploader;

import java.io.IOException;

@RequiredArgsConstructor
@RestController
public class S3TestController {

    private final S3Uploader s3Uploader;

    @PostMapping("/images")
    public String upload(@RequestParam("image") MultipartFile multipartFile) throws IOException {
        s3Uploader.upload(multipartFile);
        return "성공";
    }
}
