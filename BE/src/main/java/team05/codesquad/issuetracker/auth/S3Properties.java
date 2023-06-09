package team05.codesquad.issuetracker.auth;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

@Getter
@RequiredArgsConstructor
@ConstructorBinding
@ConfigurationProperties(prefix = "aws")
public final class S3Properties {
    private final Credentials credentials;
    private final S3 s3;
    private final Region region;

    @Getter
    @RequiredArgsConstructor
    public static final class Credentials {
        private final String accessKey;
        private final String secretKey;
    }

    @Getter
    @RequiredArgsConstructor
    public static final class S3 {
        private final String bucket;
    }

    @Getter
    @RequiredArgsConstructor
    public static final class Region {
        private final String region;
    }
}
